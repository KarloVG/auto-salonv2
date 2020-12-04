import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICarDetail } from '../interfaces/car-detail';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'api';

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error: any){
    console.log(error);
    return throwError(error);
  }

  getAllCars(): Observable<ICarDetail[]> {
    console.log('usao u getall cars')
    return this.http.get<ICarDetail[]>(this.apiUrl + '/cars');
  }

  createCar(car): Observable<ICarDetail>{
    const request = {
      name: car.name,
      mileage:car.mileage,
      cubicCapacity:car.cubicCapacity,
      fuel:car.fuel,
      gearbox:car.gearbox,
      power:car.power,
      productionYear: car.productionYear, 
      price:car.price,
      description:car.description
    }
    return this.http.post<ICarDetail>(this.apiUrl + '/cars', request, this.httpOptions).pipe(
      tap((newHero) => console.log(`added hero w/ id=${newHero.id}`)),
    );
  }

  updateCar(car):Observable<ICarDetail>{
    // tu sam promijenio URL
    const url = this.apiUrl + '/cars'
    return this.http.put<ICarDetail>(url,car);
  }
}
