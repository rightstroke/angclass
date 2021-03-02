import { Injectable } from '@angular/core';
import City from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  myCities:City[] = [];

  constructor() { 
    this.myCities = [
      { id: 1, cName: "Chennai", countryName: "India" },
      { id: 2, cName: "மதுரை", countryName: "இந்தியா" },
      { id: 3, cName: "Bangalore", countryName: "India" },
      { id: 4, cName: "Singapore City", countryName: "Singapore-APAC" }
    ];
  }

  
  

  public getCountries():City[] {
    return this.myCities;
  }

  public getCountry(idx:number):City {
    return this.myCities.filter(c => c.id==idx)[0];
  }

  public addCountry(cty:City) {
    this.myCities.push(cty);
  }


  public removeCountry(idx:number) {
    this.myCities.forEach((item,index)=>{
      //console.log(JSON.stringify(item)+ ",idx==" + index);
      if (item.id ==idx){
        this.myCities.splice(index,1);
      }
    });
  }
}
