import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role';
import { AdminAddCarComponent } from './admin/admin-add-car/admin-add-car.component';
import { NotFoundComponent } from './not-found/404/not-found.component';
import { ForbiddenComponent } from './not-found/403/forbidden/forbidden.component';


const routes: Routes = [
  {
    path:'home',
    component: CarDetailComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'home/admin',
    component:AdminAddCarComponent,
    canActivate:[AuthGuard],
    data:{roles:[Role.Admin]}
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    AuthGuard,
  ]
})
export class AppRoutingModule { }
