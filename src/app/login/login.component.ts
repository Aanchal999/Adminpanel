import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { HeaderComponent} from '../common/header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginserviceService]
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginserviceService , private routes: Router) { }
  msg:string="";

  ngOnInit(): void {
  }
 

  check(uname: string, p: string){
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
      this.msg ="Invalid Username or Password";
    }
  }

}
