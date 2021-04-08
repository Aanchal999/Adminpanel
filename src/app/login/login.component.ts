import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { HeaderComponent} from '../common/header/header.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginserviceService]
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginserviceService , 
    private routes: Router, 
    private headerComponent:HeaderComponent,
    private toastrservice:ToastrService) { }
  msg:string="";

  ngOnInit(): void {
  }
 



  check(uname: string, pwd: string){
    var output = this.service.checkcredentials(uname, pwd);
    if(output == true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
      this.toastrservice.error('Invalid Credentials','warning:',{timeOut:2000,});
    }
  }

}
