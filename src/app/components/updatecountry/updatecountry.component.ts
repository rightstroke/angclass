import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import City from 'src/app/model/city';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-updatecountry',
  templateUrl: './updatecountry.component.html',
  styleUrls: ['./updatecountry.component.css']
})
export class UpdatecountryComponent implements OnInit,OnDestroy {

  city:City;

  constructor(private aRoute:ActivatedRoute,
              private cService:CountryService,
              private loc:Location) {
    console.log("======================1..CONSTRUCTOR..");
  }

  ngOnInit(): void {
    console.log("======================2..NG OnINIT..");
    this.aRoute.params.subscribe(params => {
      console.log("Value sent is..." + params['id']);
      this.city= this.cService.getCountry(params['id']);
    });
  }

  public goBack(){
    this.loc.back();
  }


  
  ngOnDestroy(): void {
    console.log("======================3..NG ON DESTROY..");
  }


}
