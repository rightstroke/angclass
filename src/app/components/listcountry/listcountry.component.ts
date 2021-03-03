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

  myCities2:City[] = [
    { id: 1, cName: "Chennai", countryName: "India" },
    { id: 4, cName: "Singapore City", countryName: "Singapore-APAC" }
  ];


  constructor(private countryService:CountryService) { 
    this.myCities = countryService.getCountries();
  }

  public handleAddCity(c:City){
    //console.log(JSON.stringify(c));
    console.log(c);
    this.countryService.addCountry(c);
  }

  public handleRemoveCity(ids:number){
    this.countryService.removeCountry(ids);
    
    //console.log("the removed id is ..." + ids);
    //splice
    //this.myCities.forEach((item,index)=>{
    //  //console.log(JSON.stringify(item)+ ",idx==" + index);
    //  if (item.id ==ids){
    //    this.myCities.splice(index,1);
    //  }
    //});
  }

  
  ngOnInit(): void {
  }

}
