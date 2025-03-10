import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student02Component } from './student02.component';

describe('Student02Component', () => {
  let component: Student02Component;
  let fixture: ComponentFixture<Student02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Student02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
