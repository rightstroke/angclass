import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import City from 'src/app/model/city';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input("ipc1")
  public cities:City[] = [];

  @Output("eACty")
  public eAddCity:EventEmitter<City> = new EventEmitter<City>();


  @Output("eRCty")
  public eRemoveCity:EventEmitter<number> = new EventEmitter<number>();

  public city:City = new City(0,'','');;

  constructor() { }

  ngOnInit(): void {
  }

  handleAddCity(ids:number,cName:string,countryName:string) {
    this.city = new City(ids,cName,countryName);
    this.eAddCity.emit(this.city);
  }

  handleRemoveCity(ids:number) {
    this.eRemoveCity.emit(ids);
  }

}
