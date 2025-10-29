import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule  } from '@angular/forms'
import { Router } from '@angular/router';
import { Auth } from '../../services/api/auth/auth';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login implements OnInit {

  //“I promise that this property (form) will be assigned before it’s used, even if TypeScript can’t see it right now.”
  loginForm !: FormGroup<{
    email:FormControl<string>,
    password:FormControl<string>
  }>;
  loading : boolean = false;

  constructor(private fb:FormBuilder, private router:Router, private auth : Auth){}

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        email:this.fb.control('', {nonNullable:true}),
        password:this.fb.control('', {nonNullable:true})
      })

  }

  onChange(): void {
     console.log(this.loginForm.value)
  }

  handleSubmit(){
    this.loading = true;
    this.auth.login(this.loginForm.getRawValue()).subscribe({
      next:(res) =>{
        console.log('with success', res.message)
        this.loading = false;
      },
      error:(err) => {
          console.log('error')
          this.loading = false;
      },
    })
  }

  goToSignUp(){
    this.router.navigate(['/signup'])
  }

}
