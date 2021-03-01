import { ThrowStmt } from '@angular/compiler';
import BaseModel from './BaseModel';


export default class City extends BaseModel {

    constructor(id:number,cName:string,countryName:string){
        super();
        this.id = id;
        this.cName = cName;
        this.countryName=countryName;
    }

    id:number;
    cName:string;
    countryName:string;
}
