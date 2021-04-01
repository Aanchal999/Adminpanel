import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor( private routes: Router) { }

  checkusernameandpassword(uname:string, pwd: string)
  {
    if(uname == "Aanchal" && pwd == "123" ){
      localStorage.setItem('username', "Aanchal");
      return true;
    }
    else{
      return false;
    }
  }

  userList:Array<any> = JSON.parse(localStorage.getItem('Users')||'{}');


 logOut(){
  localStorage.removeItem('username');
  this.routes.navigate(['/login'])
 }

}
