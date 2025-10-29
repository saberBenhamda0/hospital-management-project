import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  constructor(private fb:FormBuilder, private router:Router){}

  ngOnInit(): void {
  }
  
  handleNavigate(destination:string){
    this.router.navigate([destination]);
  }

}
