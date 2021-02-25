import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthserviceService} from '../authservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm = this.fb.group({
    userName: [''],
    password: [''],
    city: [''],
    state: [''],
    pincode: ['']
  });
   user: any = {};
  constructor(private fb: FormBuilder, private authservice: AuthserviceService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.authservice.addUsers(this.user);
    this.registrationForm.reset();
  }

}
