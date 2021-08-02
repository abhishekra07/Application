import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardServiceService } from '../service/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}

  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
      console.log('inside canActivate if');
    } 
    console.log('token is available');
    return this.Authguardservice.gettoken(); 
  }

  
  
}
