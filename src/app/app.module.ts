import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoleDirective } from './directives/user-role.directive';
import { UserDirective } from './directives/user.directive';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    ProfileComponent,
    UserRoleDirective,
    UserDirective,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports:[
    UserDirective,
    UserRoleDirective
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
