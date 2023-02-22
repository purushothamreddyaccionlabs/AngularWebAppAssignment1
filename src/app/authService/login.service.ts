import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn:boolean|undefined; //for canActivate service
  pswArray: any; // geting the passwords container array from localstorage


  regCredentials:any; 
  

  constructor(private router:Router) { }

ngOnInit(){
  this.userCredential();
  this.pswArray = localStorage.getItem('pswArray');
}
userCredential(){
  this.regCredentials = JSON.parse(localStorage.getItem('regdata') || '{}');
  console.log(this.regCredentials);
}

  
 
  

  logoutuser(){
    this.router.navigate(['']);
  }
  canLogin(){ //for CanActivate
    if(!this.loggedIn){
      return false;
    }
    return true;
  }
login(user:User){
  debugger
  const foundUser = this.pswArray.find((element: any) => {
    return user.username === element.rgname && user.password === element.password;
  });
  if (foundUser) {
    this.loggedIn = true;
    this.router.navigate(['homepage']);
  }
    // if(user.username === item.rgname && user.password === item.password ){
      
    // }
  
}

  
}

