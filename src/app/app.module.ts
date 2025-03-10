import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './shared/components/todo/todo.component';
import { StudentComponent } from './shared/components/student/student.component';
import { Student02Component } from './shared/components/student02/student02.component';





@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    StudentComponent,
    Student02Component
   
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
