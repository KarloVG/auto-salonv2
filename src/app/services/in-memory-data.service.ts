import { ICarDetail } from '../interfaces/car-detail';

import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';
import { Role } from '../models/role';
import { IDropdownYear } from '../interfaces/dropdown-year';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const years = [];
        for(let i = 1950; i < 2020; i++){
            let newYear = {
                value:i.toString(),
                id:i-1950
            };
            years.push(newYear);

        }

        
        const users: User[] = [
            {
                id: 1,
                username: 'branko',
                password: '213',
                firstName: 'branko',
                lastName: 'brankic',
                role: Role.Admin
            }
        ];
        const cars: ICarDetail[] = [
            {
                id: 1,
                name: "ALPINA B10 Bi-turbo",
                mileage: "176751 km",
                cubicCapacity: "3430 ccm",
                fuel: "benzin",
                gearbox: "ručni",
                power: "360 ks",
                productionYear: 40,
                price: "€48,900",
                imagePath: "Alpine B10/A1",
                description: "Mrcina"
            },
            {
                id: 2,
                name: "Lotus Elan Sprint",
                mileage: "9777 km",
                cubicCapacity: "1588 ccm",
                fuel: "benzin",
                gearbox: "ručni",
                power: "126 ks",
                productionYear: 22,
                price: "€47,900",
                imagePath: "Lotus Elan/L2",
                description: "Mrcina"
            },
            {
                id: 3,
                name: "Mercedes-Benz 190 E 2.3-16",
                mileage: "186720 km",
                cubicCapacity: "2276ccm",
                fuel: "benzin",
                gearbox: "ručni",
                power: "170 ks",
                productionYear: 36,
                price: "€35,900",
                imagePath: "Mercedes 190/M1",
                description: "mrcina"
            },
            {
                id: 4,
                name: "Renault 5 turbo 2",
                mileage: "39908 km",
                cubicCapacity: "1387 ccm",
                fuel: "benzin",
                gearbox: "ručni",
                power: "160 ks",
                productionYear: 34,
                price: "€83,900",
                imagePath: "Renault 5/R510",
                description: "mrcina"
            },
            {
                id: 5,
                name: "Saab 900 turbo 16",
                mileage: "341211 km",
                cubicCapacity: "1985 ccm",
                fuel: "benzin",
                gearbox: "ručni",
                power: "175 ks",
                productionYear: 35,
                price: "€18,900",
                imagePath: "Saab 900/S1",
                description: "mrcina"
            },
            {
                id: 6,
                name: "Volvo 850 R",
                mileage: "131258 km",
                cubicCapacity: "2319 ccm",
                fuel: "benzin",
                gearbox: "automatski",
                power: "241 ks",
                productionYear: 46,
                price: "€19,900",
                imagePath: "Volvo 850/V1",
                description: "mrcina"
            }
        ];
        return{users,cars,years};
    }

}