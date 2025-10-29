import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-email',
  imports: [ReactiveFormsModule],
  templateUrl: './register-email.html',
  styleUrl: './register-email.css'
})
export class RegisterEmail {

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

  goToLogin(){
    this.router.navigate(["/login"])
}

}
