import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor() { }

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
}
