import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../model/auth';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:string="siva1";
  pwd:string="siva1";
  invalid:boolean = false;

  auth:Auth;

  constructor(private route:Router,private authService:AuthService) { }

  ngOnInit(): void {
    sessionStorage.setItem("auth","");
  }

  handleLogin(){
    let auth = {
      userid : this.uid,
      password:this.pwd,
      ts: new Date()
    };
    
    this.authService.doAuth(this.uid,this.pwd).then((a:Auth[])=>{
      console.log("=======from promise")
      if (a.length>0) {
        sessionStorage.setItem("auth",this.uid);
        this.route.navigate(['dashboard']);
      } else {
        this.invalid = true;
        this.route.navigate(['login']);
      }
    }).catch((err)=>{
      console.log("Error" + err);
    })
    
    //this.route.navigate(['dashboard']);
    console.log(auth);
    console.log("All is wekll")
  }

}
