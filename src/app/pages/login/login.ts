import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule  } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  //“I promise that this property (form) will be assigned before it’s used, even if TypeScript can’t see it right now.”
  loginForm !: FormGroup;

  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        email:[''],
        password:['']
      })
  }

  onChange(): void {
     console.log(this.loginForm.value)
  }

  goToSignUp(){
    this.router.navigate(['/signup'])
  }

}
