import { Component, OnDestroy, OnInit } from '@angular/core';
import City from 'src/app/model/city';
import { CountryService } from 'src/app/service/country.service';
import { Auth } from '../../model/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  uid:string="rsc";
  auth:any;

  inp:number = 5;

  dte:Date = new Date();

  constructor(private cService:CountryService) { 
    
  }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
    this.auth = sessionStorage.getItem("auth");
  }

  updatecity(){
    let cty:City = new City(100,'Delhi','India');
    this.cService.addCountry(cty);
  }

}
