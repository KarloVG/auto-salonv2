import { Component, OnInit } from '@angular/core';
import { CARS } from '../models/car-model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  cars = CARS;

  constructor() { }

  
  ngOnInit(): void {
  }

}
