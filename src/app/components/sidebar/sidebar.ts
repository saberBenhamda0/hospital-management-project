import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Label {
  name:string,
  destination:string
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})

export class Sidebar implements OnInit {

  public current_router :string = '';


  public labels:Label[] = [
  {
    name:"Dashboard", destination:"/doctor/home",
  },
  {
    name:"Scans", destination:"/doctor/scan",
  },
  {
    name:"Reports", destination:"/doctor/report",
  },
  {
    name:"Settings", destination:"/admin/home",
  },
]

  constructor(private router:Router){}

  ngOnInit(): void {
    this.current_router = this.router.url;
  }

  handleNavigate(destination:string){
    this.router.navigate([destination]);
  }

}
