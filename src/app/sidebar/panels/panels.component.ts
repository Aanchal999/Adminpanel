import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor() { }
  
 // userList:Array<any> = JSON.parse(localStorage.getItem('Users')||'{}');
  //username:string = (localStorage.getItem('username')||'{}');

 
  users = JSON.parse(localStorage.getItem('username')||'{}');
  user:any={};
   userList:any=[{'f1':this.users.f1,'l1':this.users.l1,'e1':this.users.e1,'f2':this.users.f2,'a1':this.users.a1,'p1':this.users.p1,'p2':this.users.p2}];
 
   onSubmit()
  {
    if(localStorage.getItem(this.users.e1))
    {
      localStorage.setItem(this.users.e1,JSON.stringify(this.userList));
     // localStorage.setItem('currentUser',JSON.stringify(this.userList));
      //users=JSON.parse(localStorage.getItem('Users')!);
      //users=[user,...users];//...is a spread operator that allows elements of array to expand in existing array
      alert("Updated Profile!!")
    }
    else
    {
      alert("Not Updated!!")
    }
  }

 
 
  
  
  
  
  
  
  ngOnInit(): void {
  }
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'Himachal Pradesh','item9':'','item10':'','item11':''}]
  result:any=[{}];

}
