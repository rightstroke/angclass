import { Component, OnInit } from '@angular/core';
import City from 'src/app/model/city';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-listcountry',
  templateUrl: './listcountry.component.html',
  styleUrls: ['./listcountry.component.css']
})
export class ListcountryComponent implements OnInit {


  myCities:City[]= [];


  ngOnInit(): void {
    this.countryService.getCountries().then((cities:City[])=>{
      this.myCities = cities;
      //throw new Error("Unknown Error" + new Date());
    }).catch((err)=>{
      console.log("in Error logs");
      console.error(err);
    }).finally(()=>{
      console.log("All is Well - getCountries");
    });
  }

  constructor(private countryService:CountryService) { 
    //this.myCities = countryService.getCountries();
  }

  public handleAddCity(c:City){
   this.countryService.addCountry(c).then((c)=>{
     this.myCities.push(c);
   });
  }

  public handleRemoveCity(ids:number){
    this.countryService.removeCountry(ids).then((res)=>{
      console.log(ids + "..Removed")
    });


    //this.countryService.removeCountry(ids);
    
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
