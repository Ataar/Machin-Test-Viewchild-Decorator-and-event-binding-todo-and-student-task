import { Component, OnInit } from '@angular/core';
import { Itodo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
 
 todoArr : Array<Itodo> = [

 

 ]
  
  
  constructor() { }
  ngOnInit(): void {
    let stordata = localStorage.getItem('obj')
    if(stordata)
    {
      this.todoArr = JSON.parse(stordata)
    }
  }

   addB(get01 : HTMLInputElement)
   {
      let newObj:Itodo = 
      {
        todo : get01.value
      }
        console.log(newObj)
        get01.value = ''; 
      this.todoArr.push(newObj)
      localStorage.setItem('obj' , JSON.stringify(this.todoArr))
   }

}
