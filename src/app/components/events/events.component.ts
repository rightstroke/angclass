import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  text = ''; //initialised the text variable 
  
  ngOnInit(): void { 
  } 

  onKeyUp(x) { // appending the updated value to the variable 
    this.text = x.target.value; 
  }

}
