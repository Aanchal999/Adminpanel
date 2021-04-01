import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { UserDTO} from './userDTO';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  signup:any={};
  
  user:any={};
 // signupForm!: FormGroup;

 
  

  ngOnInit(): void {
  }
  onSubmit(signupForm:NgForm)
  {
    this.user=Object.assign(this.user,signupForm.value);
   // localStorage.setItem('user',JSON.stringify(this.user));
    this.userService.addUser(this.user);
    this.routes.navigate(['/login']);
  }

 
  form_el=[{'item1':'','item2':'','item3':'','item4':'','item5':'','item6':'','item7':'','item8':'Himachal Pradesh','item9':'','item10':'','item11':''}]
  result:any=[{}];




  /*cities:Array<any>;
  stateList: Array<any> = [
    { name: 'Select State', cities: ['Select City'] },
    { name: 'Uttar Pradesh', cities: ['Noida', 'Kanpur', 'Varanasi'] },
    { name: 'Rajasthan', cities: ['Jaipur','Kota','Udaipur'] },
    { name: 'Tamil Nadu', cities: ['Chennai','Madurai','Vellore'] },
    { name: 'Maharashtra', cities: ['Mumbai','Pune','Nagpur'] },
  ];*/

  cities!: Array<any>;
  stateList:Array<any>=[{name:'Select State',cities:['Select City']},
  {name:'Uttar Pradesh',cities:['Noida','Lucknow','Varanasi']},
  {name:'Rajasthan',cities:['Jaipur','Udaipur','Jodhpur']},
  {name:'Himachal Pradesh',cities:['Shimla','Manali','Dalhousie']},
  {name:'Haryana',cities:['Gurugram','Rohtak','Faridabad']},                      
  ];

  changeCountry(count:Event)
  {
    this.cities=this.stateList.find(con=>con.name==(<HTMLInputElement>count.target).value).cities;
  }



  



  constructor(private routes: Router,private userService:UserService) { }


}
