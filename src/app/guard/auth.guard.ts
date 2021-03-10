import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private route: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let authkey = sessionStorage.getItem("auth");
        console.log(".....AuthGuard Route Name=====" + route.url);
        console.log("authkey...." + authkey);
        if (!authkey) {
            alert("Plesae login first...");
            this.route.navigate(['login']);
        }
        return true;
    }

}