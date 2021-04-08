import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { UserDTO} from './userDTO';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  signup:any={};
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; 
  user:any={};
 // signupForm!: FormGroup;

 
  

  ngOnInit(): void {

  }
  onSubmit(signupForm:NgForm)
  {
    this.user=Object.assign(this.user,signupForm.value);

    this.addUser(this.user);
   // this.routes.navigate(['/login']);
  
  }

  addUser(user: any)
  {
  
    if(localStorage.getItem(this.user.e1))
    {
      

      this.toastrservice.error('User already exists','warning:',
      {
        timeOut:2000,

      });
    }
    else
    {
  
      localStorage.setItem(this.user.e1,JSON.stringify(user));
      this.toastrservice.success('User Registered!','Note:',
      {
        timeOut:2000, 
      });
      this.routes.navigate(['/login']);
    }

  }
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'Himachal Pradesh','item9':'','item10':'','item11':''}]
  result:any=[{}];



  cities!: Array<any>;
  stateList:Array<any>=
  [{name:'Select State',cities:['Select City']},
  {name:'Uttar Pradesh',cities:['Kanpur','Lucknow','Bareilly']},
  {name:'Maharashtra',cities:['JPune','Mumbai','Nasik']},
  {name:'Gujarat',cities:['Vadodra','Ahemdabad','Gandhi Nagar']},
  {name:'Haryana',cities:['Gurugram','Rohtak','Faridabad']},                      
  ];

  changeCountry(count:Event)
  {
    this.cities=this.stateList.find
    (con=>
      con.name==
      (<HTMLInputElement>count.target)
      .value)
      .cities;
  }

  constructor(
    private routes: Router,
    private userService:UserService,
    public toastrservice: ToastrService) 
    { }


}
