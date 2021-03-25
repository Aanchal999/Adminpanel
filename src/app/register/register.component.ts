import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formBuilder: any;
  

  constructor() { }

  public register: FormGroup | undefined;
  ngOnInit(): void {
    this.register = this.formBuilder.group({
      firstname: ['', [Validators.required]]
    });
  }


  }


