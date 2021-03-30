import { Injectable } from '@angular/core';
import { UserDTO} from './userDTO';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  
  addUser(user){
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users')||'{}');
      users=[...users, user] as any;
    } else{
      users=[user] as any;
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }


}
