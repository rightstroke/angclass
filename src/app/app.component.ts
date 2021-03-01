import { Component } from '@angular/core';
import City from './model/city';4
import {CalcService} from './service/calc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-app';
  public myName:string = "RSC Consulting";
  public len:number=0;

  public myEmail:string="";

  myCities:City[]= [];

  selectedCity:City;
  
  //Dependency Injection of Service
  constructor(private cService:CalcService) {
    setTimeout(() => {
      console.log("I am here...");
      this.title = "Manic Basha...";
    }, 7000);

    this.myCities = [
      {id:1,cName:"Chennai",countryName:"India"},
      {id:2,cName:"மதுரை",countryName:"இந்தியா"},
      {id:3,cName:"Bangalore",countryName:"India"}
    ];

    console.log(this.cService.sum(999,1000));
  }

  public handleCityList(c:City){
    this.selectedCity = c;
    //console.log(this.selectedCity);
  }

  public handleEmailEntry(e){
    this.myEmail = e.target.value;
    //console.log(`Email is....${e.target.value}`);
  }

  public handleSubmit(data:string){
    this.myEmail = data;
    //console.log(`CLick Email is....${this.myEmail}`);
  }

  public handleAddCity(c:City){
    //console.log(JSON.stringify(c));
    console.log(c);
    this.myCities.push(c);

  }

  public handleRemoveCity(ids:number){
    //console.log("the removed id is ..." + ids);
    //splice
    this.myCities.forEach((item,index)=>{
      //console.log(JSON.stringify(item)+ ",idx==" + index);
      if (item.id ==ids){
        this.myCities.splice(index,1);
      }
    });
  }
 
}
