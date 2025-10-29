import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterEmail } from '../../components/signup/register-email/register-email';
import { RegisterUserDetails } from '../../components/signup/register-user-details/register-user-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RegisterEmail, RegisterUserDetails, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {

  signUpForm !: FormGroup;
  register_email_shown : boolean = false;
  register_user_shown : boolean = true;

  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
}

}
