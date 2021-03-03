import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../model/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:string="siva1";
  pwd:string="siva1";

  auth:Auth;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    let auth = {
      userid : this.uid,
      password:this.pwd,
      ts: new Date()
    };
    sessionStorage.setItem("auth",JSON.stringify(auth));
    this.route.navigate(['dashboard']);
    console.log(auth);
  }

}
