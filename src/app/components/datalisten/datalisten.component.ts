import { Component, OnInit } from '@angular/core';
import { DatacommService } from 'src/app/service/datacomm.service';

@Component({
  selector: 'app-datalisten',
  templateUrl: './datalisten.component.html',
  styleUrls: ['./datalisten.component.css']
})
export class DatalistenComponent implements OnInit {

  public datas:any[] = [];

  constructor(private dcomm:DatacommService) { 
    this.dcomm.getMessage().subscribe((mess=>{
      if (mess){
        this.datas.push(JSON.stringify(mess));
      } else {
        this.datas = [];
      }
      
    }));
  }

  ngOnInit(): void {
  }

}
