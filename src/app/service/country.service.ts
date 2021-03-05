import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import City from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  myCities:City[] = [];

  cityUrl:string = "http://localhost:3000/city/";

  constructor(private http:HttpClient) { 
    // this.myCities = [
    //   { id: 1, cName: "Chennai", countryName: "India" },
    //   { id: 2, cName: "மதுரை", countryName: "இந்தியா" },
    //   { id: 3, cName: "Bangalore", countryName: "India" },
    //   { id: 4, cName: "Singapore City", countryName: "Singapore-APAC" }
    // ];
  }

  
  

  public getCountries():Promise<City[]> {
    return this.http.get<City[]>(this.cityUrl).toPromise();
  }

  public addCountry(cty:City):Promise<City> {
    return this.http.post<City>(this.cityUrl,cty).toPromise();
    
    //this.myCities.push(cty);
  }

  public removeCountry(idx:number):Promise<any> {
    return this.http.delete<any>(`${this.cityUrl}${idx}`).toPromise();
  }

  public getCountry(idx:number):Promise<City> {
    return this.http.get<City>(this.cityUrl + idx).toPromise();
  }

  public updateCountry(cty:City):Promise<City> {
    return this.http.put<City>(this.cityUrl + cty.id,cty).toPromise();
  }
}
