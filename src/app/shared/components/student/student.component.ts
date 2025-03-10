import { Component, OnInit } from '@angular/core';
import { Istudent } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
   
  sTable :Array<Istudent> = [
    
  ]
   
   
  constructor() {
    let data = localStorage.getItem('getObj')
    if(data)
    {
      this.sTable = JSON.parse(data)
    }
   }

  ngOnInit(): void {
   
  }

  addB(nameControl: HTMLInputElement,emailControl:HTMLInputElement,
    phoneControl:HTMLInputElement)
  {
    let stdObj : Istudent = 
    {
     name:nameControl.value,
     email:emailControl.value,
     phone:+phoneControl.value
    }
    console.log(stdObj)
     nameControl.value = '';
     emailControl.value = '';
     phoneControl.value = '';
    

   this.sTable.push(stdObj)
   localStorage.setItem('getObj',JSON.stringify(this.sTable))
  }

}
