import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseStyleClassComponent } from './exercise-style-class.component';

describe('ExerciseStyleClassComponent', () => {
  let component: ExerciseStyleClassComponent;
  let fixture: ComponentFixture<ExerciseStyleClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseStyleClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseStyleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
