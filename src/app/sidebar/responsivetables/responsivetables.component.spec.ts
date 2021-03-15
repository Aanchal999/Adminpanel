import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivetablesComponent } from './responsivetables.component';

describe('ResponsivetablesComponent', () => {
  let component: ResponsivetablesComponent;
  let fixture: ComponentFixture<ResponsivetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsivetablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
