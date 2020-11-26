import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LoginComponent } from './login/login.component';
import { Role } from './models/role';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CarDetailComponent
      },
      {
        path: 'profile',
        canActivate: [AuthGuard],
        component: ProfileComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [
        Role.Admin,
      ]
    },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }
