import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ICarDetail } from '../interfaces/car-detail';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { CarService } from '../services/car.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  loading = false;
  currentUser: User;
  userFromApi: User;
  cars: ICarDetail[];

  constructor(
    private userService: UserService,
    private authetiticationService: AuthenticationService,
    private carService: CarService)
    {
    this.currentUser = this.authetiticationService.currentUserValue;
     }

  
  ngOnInit(): void {
    console.log(this.cars)
    this.loading = true;
    if(this.currentUser) {
      this.userService.getById(this.currentUser?.id).pipe(first()).subscribe(user => {
        this.loading = false;
        this.userFromApi = user;
      });
    }

    this.getCars();
  }

  getCars(){
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
      console.log('all cars', data)
    });
  }
}


