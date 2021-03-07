import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth:Auth[] = [
    {"userid":"siva","password":"siva@12345"},
    {"userid":"test","password":"test@12345"},
    {"userid":"admin","password":"admin@12345"},
  ]

  loginUrl:string = "http://localhost:3000/auth/";

  constructor(private http:HttpClient) { }

  public getMockPromise():Promise<Auth[]> {
    return Promise.resolve(this.auth);
  }

  public getMockPromiseSlowly(): Promise<Auth[]>{
  
    let promise = new Promise<Auth[]>(resolve => {
      setTimeout(()=>resolve(this.getMockPromise()),8000);
    });

    return promise;
  }

  public doAuth(u:string,p:string):Promise<Auth[]> {
    //let auth:Auth;
    // auth = {
    //   userid:u,
    //   password:p,
    //   ts:new Date()
    // }
    let url = this.loginUrl + "?userid=" + u;
    return this.http.get<Auth[]>(url).toPromise();
  }
}
