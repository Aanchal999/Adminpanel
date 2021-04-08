import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor( private routes: Router) { }

  //checkusernameandpassword(uname:string, pwd: string)
  //{
    //if(uname == "Aanchal" && pwd == "123" ){
      //localStorage.setItem('username', "Aanchal");
      //return true;
    //}
    //else{
      //return false;
    //}
  //}




  checkcredentials(uname:string, pwd: string)
  {

  let keys : any = Object.keys(localStorage);
for(let i = 0 ;i< keys.length; i++){

    let userList = JSON.parse(localStorage.getItem(keys[i])||'{}');
    if(uname == keys[i] && pwd == userList.p1)
    {
      localStorage.setItem('username', JSON.stringify(userList));
      return true;
    }
    
  
  }
  return false;
}
 


 logOut(){
  localStorage.removeItem('username');
  this.routes.navigate(['/login'])
 }

}
