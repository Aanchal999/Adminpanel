import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {


  user:any={};
 // signupForm!: FormGroup;

 
  

  ngOnInit(): void {
  }
  onSubmit(signupForm:NgForm)
  {
    this.user=Object.assign(this.user,signupForm.value);
   // localStorage.setItem('user',JSON.stringify(this.user));
    this.addUser(this.user);
  }
  addUser(user: any)
  {
    let users:any[]=[];
    
    if(localStorage.getItem('Users'))
    {
      users=JSON.parse(localStorage.getItem('Users')!);
      users=[user,...users];//...is a spread operator that allows elements of array to expand in existing array
    }
    else
    {
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(user));
  }
 
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'Himachal Pradesh','item9':'','item10':'','item11':''}]
  result:any=[{}];

 // cities: Array<string> =[];







  constructor() { }


}
