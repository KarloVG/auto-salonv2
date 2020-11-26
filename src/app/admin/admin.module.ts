import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';


@NgModule({
  declarations: [
    AddVehicleComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class AdminModule { }
