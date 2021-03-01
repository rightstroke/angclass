import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  public sum(x:number,y:number):number {
    return x+y;
  }

  public multiply(x:number,y:number):number {
    return x*y;
  }
}
