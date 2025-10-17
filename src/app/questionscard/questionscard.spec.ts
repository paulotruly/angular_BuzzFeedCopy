import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionscard } from './questionscard';

describe('Questionscard', () => {
  let component: Questionscard;
  let fixture: ComponentFixture<Questionscard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questionscard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questionscard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
