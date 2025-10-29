import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  imports: [CommonModule],
  templateUrl: './patients.html',
  styleUrl: './patients.css'
})
export class Patients implements OnInit{

  array !: any[];
  filtered_array !: any[];

  constructor(){}

  ngOnInit(): void {
    this.array = [
      {
      id:1,
      name:'saber',
      date:'test',
      gender:'female',
      contact:'0649713346',
      status:1
    },
      {
      id:2,
      name:'saber2',
      date:'test2',
      gender:'female',
      contact:'0649713346',
      status:2
    }
  ]

  this.filtered_array = [
      {
      id:1,
      name:'saber',
      date:'test',
      gender:'female',
      contact:'0649713346',
      status:1
    },
      {
      id:2,
      name:'saber2',
      date:'test2',
      gender:'female',
      contact:'0649713346',
      status:2
    }
  ]

  }

  handleSearch(search_term:string){
    if(search_term != ""){
      this.filtered_array = this.array.filter((item) => item.name.includes(search_term))
    } else {
      this.filtered_array = this.array
    }
  }


}
