import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup implements OnInit {

  signUpForm !: FormGroup;

  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      username:[''],
      email:[''],
      password:[''],
      confirme_password:['']
    })
}

  onChange(){
    console.log(this.signUpForm.value)
}

  goToLogin(){
    this.router.navigate(["/login"])
}

}
