import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginserviceService } from 'src/app/loginservice.service';
@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  constructor(
    private toastrservice:ToastrService,
    private loginservice : LoginserviceService
  ) { }
  
 // userList:Array<any> = JSON.parse(localStorage.getItem('Users')||'{}');
  //username:string = (localStorage.getItem('username')||'{}');

  headers:Array<string>=["First Name","Last Name","Phone Number","Email"]
    username:string = (localStorage.getItem('username'));
  users = JSON.parse(localStorage.getItem('username')||'{}');
  user={};
   userList=[
     {'f1':this.users.f1,
     'l1':this.users.l1,
     'e1':this.users.e1,
     'f2':this.users.f2,
     'a1':this.users.a1,
     'p1':this.users.p1,
     'p2':this.users.p2,
     'city':this.users.city,
     'country': this.users.country,
     'state': this.users.state,
    }];



     



 
   onSubmit()
  {
    if(localStorage.getItem(this.users.e1))
    {
      localStorage.setItem(
        this.users.e1,
        JSON.stringify(this.userList[0]
          ));
      localStorage.setItem(
        'username',
        JSON.stringify(this.userList[0]
          ));
     // localStorage.setItem('currentUser',JSON.stringify(this.userList));
      //users=JSON.parse(localStorage.getItem('Users')!);
      //users=[user,...users];//...is a spread operator that allows elements of array to expand in existing array
      this.toastrservice.success('Profile updated','Note:',{timeOut:2000,});
    }
    else
    {
      this.toastrservice.error('Profile Not Updated','Warning:',{timeOut:2000,});
    }
  }


  signup:any={};
  cities!: Array<string>;
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

  
  ngOnInit(): void {
  }

}
