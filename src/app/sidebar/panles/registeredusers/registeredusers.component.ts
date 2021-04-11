import { Component, Injectable, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-registeredusers',
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.scss']
})

@Injectable({
  providedIn: 'root',
})
export class RegisteredusersComponent implements OnInit {

  constructor(
    private loginservice: LoginserviceService
  ) { }

  headers:Array<string>=["First Name","Last Name","Phone Number","Email"]
  

userList:Array<any>=[];
  ngOnInit(): void {

     this.userList=this.loginservice.returnuser(this.userList);
 }


}
