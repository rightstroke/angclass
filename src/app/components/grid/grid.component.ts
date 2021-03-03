import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import City from 'src/app/model/city';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges {

  @Input("ipc1")
  public cities: City[] = [];

  @Output("eACty")
  public eAddCity: EventEmitter<City> = new EventEmitter<City>();


  @Output("eRCty")
  public eRemoveCity: EventEmitter<number> = new EventEmitter<number>();

  public city: City = new City(0, '', '');;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {

    for (let p in changes) {

      let control = changes[p];
      console.log(p);
      console.log(control.previousValue);
      console.log(control.currentValue);
      console.log("#############")
    }

  }

  ngOnInit(): void {
  }

  handleAddCity(ids: number, cName: string, countryName: string) {
    this.city = new City(ids, cName, countryName);
    this.eAddCity.emit(this.city);
  }

  handleRemoveCity(ids: number) {
    this.eRemoveCity.emit(ids);
  }

}
