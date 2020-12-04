import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { IDropdownYear } from './dropdown-year';

export interface ICarDetail{
    id:number,
    name: string,
    mileage: string,
    cubicCapacity: string,
    fuel: string,
    gearbox: string,
    power: string,
    // tu je bio objekt productionYear: IDropdownYear
    productionYear: number,
    price: string,
    imagePath: string,
    description: string,
    // tu sam ovo dodao
    productionYearString?: string
}