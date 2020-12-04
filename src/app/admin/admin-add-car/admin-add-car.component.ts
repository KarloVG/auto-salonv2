import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ICarDetail } from 'src/app/interfaces/car-detail';
import { IDropdownYear } from 'src/app/interfaces/dropdown-year';
import { User } from 'src/app/models/user';
import { CarService } from 'src/app/services/car.service';
import { UserService } from 'src/app/services/user.service';

@Component({ 
    templateUrl: 'admin-add-car.component.html',
    styleUrls: ['./admin-add-car.component.scss'] })

export class AdminAddCarComponent implements OnInit {
    loading = false;
    users: User[] = [];
    formGroup: FormGroup;
    cars: ICarDetail[];
    years: IDropdownYear[] = [];
    addEdit=true;

    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder,
        private carService: CarService,
        private router: Router) { }

    ngOnInit() {

        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

        this.formGroup = this.formBuilder.group({
            id:[''],
            name:['', Validators.required],
            mileage:['', Validators.required],
            cubicCapacity:['', Validators.required],
            fuel:['', Validators.required],
            gearbox:['', Validators.required],
            power:['', Validators.required],
            productionYear:['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]], //obavezno uglata zagrada
            price:['', Validators.required],
            description:['']
        })
        for(let i = 1950; i < 2020; i++){
            this.years.push({
                value:i,
                id:i-1950
            });
        }

        this.getCars();
    }

    selectedCar(car){
        console.log('car',car)
        // this.carService.updateCar(car).subscribe(data=>{})
        this.formGroup.patchValue({
            id:car.id,
            name:car.name,
            mileage:car.mileage,
            cubicCapacity:car.cubicCapacity,
            fuel:car.fuel,
            gearbox:car.gearbox,
            power:car.power,
            // tu je bilo production>Year: car.productionYear.value
            productionYear:car.productionYear,
            price:car.price,
            description:car.description
        })
        
    }
    addSymbol(symbol){
        if(symbol.target.value.length >=2){
            symbol.target.value = symbol.target.value + 'kw';
        }
    }

    changeYear(year){
        this.productionYear.setValue(year.target.value, {
            onlySelf:true
        })
    }

    getCars() {
        this.carService.getAllCars().subscribe(data => {
            // tu je bilo this.cars = data;
            this.cars = data.map(
                car => {
                    return {
                        ...car,
                        productionYearString: this.years.find(entity => entity.id == car.productionYear).value.toString()
                    }
                }
            );
        });
    }

    submit(){
        const edit = this.formGroup.get('id').value != "";
        const carr = this.formGroup.value;
        if(edit){
            this.carService.updateCar(carr).subscribe(data=>{
                //tu nije bilo ničega
                this.getCars();
            })
        }else{
            this.carService.createCar(this.formGroup.value).subscribe(data => {
                // tu je bilo this.cars.push(car) -> push znaci da u array [] doda na zadnje mjesto objekt kojeg si definirao
                this.getCars();
            });
        }
    }

    get name(): AbstractControl {
        return this.formGroup.get('name');
    }

    get mileage(): AbstractControl {
        return this.formGroup.get('mileage');
    }

    get cubicCapacity(): AbstractControl {
        return this.formGroup.get('cubicCapacity');
    }
    get fuel(): AbstractControl {
        return this.formGroup.get('fuel');
    }

    get gearbox(): AbstractControl {
        return this.formGroup.get('gearbox');
    }

    get power(): AbstractControl {
        return this.formGroup.get('power');
    }

    get productionYear(): AbstractControl {
        return this.formGroup.get('productionYear');
    }
    get price(): AbstractControl {
        return this.formGroup.get('price');
    }

    get description(): AbstractControl {
        return this.formGroup.get('description');
    }

}