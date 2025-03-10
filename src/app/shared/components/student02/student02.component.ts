import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istd } from '../models/std02';

@Component({
  selector: 'app-student02',
  templateUrl: './student02.component.html',
  styleUrls: ['./student02.component.scss'],
})
export class Student02Component implements OnInit {
  @ViewChild('name') nameRef!: ElementRef;
  @ViewChild('email') emailRef!: ElementRef;
  @ViewChild('phone') phoneRef!: ElementRef;

  stdArr: Array<Istd> = [];

  constructor() {}
  ngOnInit(): void {
    let data = localStorage.getItem('get');
    if (data) {
      this.stdArr = JSON.parse(data);
    }
  }
 

  sBtn() {
    let newObj: Istd = {
      name: this.nameRef.nativeElement.value,
      email: this.emailRef.nativeElement.value,
      phone: this.phoneRef.nativeElement.value,
    };

    this.stdArr.push(newObj);
    localStorage.setItem('get', JSON.stringify(this.stdArr));

    this.nameRef.nativeElement.value = '';
    this.emailRef.nativeElement.value = '';
    this.phoneRef.nativeElement.value = '';
  }
}
