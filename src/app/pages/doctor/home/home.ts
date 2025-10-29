import { Component, OnInit } from '@angular/core';
import { Sidebar } from '../../../components/sidebar/sidebar';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Sidebar, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  array !:any[];
  filtered_array = this.array;

  constructor(){}

  ngOnInit(): void {
    this.array = [
      {
      id:1,
      name:"sofia clark",
      age:45,
      gender:"Female",
      status:3
    },
      {
      id:2,
      name:"Saber",
      age:45,
      gender:"Male",
      status:2
    },
      {
      id:3,
      name:"sofia clark",
      age:45,
      gender:"Female",
      status:1
    }
  ];

      this.filtered_array = [
      {
      id:1,
      name:"sofia clark",
      age:45,
      gender:"Female",
      status:3
    },
      {
      id:2,
      name:"Saber",
      age:30,
      gender:"Male",
      status:2
    },
      {
      id:3,
      name:"sofia test",
      age:45,
      gender:"Female",
      status:1
    }
  ];
  }

  handleSearch(search_term : string){
    if(search_term != ""){
      this.filtered_array = this.array.filter((item) => item.name.includes(search_term))
    }else{
      this.filtered_array = this.array
    }
  }



}
