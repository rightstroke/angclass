import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatacommService {

  private subject = new Subject<any>();

  constructor() { }

  public sendMessage(message:string) {
    this.subject.next({text:message});
  }

  public getMessage():Observable<any> {
    return this.subject.asObservable();
  }

  public cleanMessage(){
    this.subject.next();
  }
}
