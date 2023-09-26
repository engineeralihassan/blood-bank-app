import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: any = {};
  loginData: any = {};



  onSubmit(form:NgForm,typeform:string): void {
    console.log(form);
    if (typeform === 'login') {
      // Handle signup form submission
      console.log('login form submitted', this.loginData);
      alert("submition")
    } else  {
      // Handle login form submission
      console.log('signup form submitted', this.user);
    }
  }
}
