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
 


returnuser(userList:Array<any>)
{
    let key:any=Object.keys(localStorage);
    for(let i=0;i<key.length;i++)
    {
      if(key[i]=='username')
      {
        let user=JSON.parse(localStorage.getItem(key[i])||'{}');
        userList[i]={'f1':user.f1,'l1':user.l1,'e1':user.e1,'f2':user.f2,'a1':user.a1,'country':user.country,'state':user.state,'city':user.city,'p1':user.p1,'p2':user.p2};
      }
      else{
        let user=JSON.parse(localStorage.getItem(key[i])||'{}');
        userList[i]={'f1':user.f1,'l1':user.l1,'e1':user.e1,'f2':user.f2,'a1':user.a1,'country':user.country,'state':user.state,'city':user.city,'p1':user.p1,'p2':user.p2};
    
      }
    }
    return userList
}






 logOut(){
  localStorage.removeItem('username');
  this.routes.navigate(['/login'])
 }

}
