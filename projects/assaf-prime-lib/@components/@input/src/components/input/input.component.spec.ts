import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: AssafInputComponent;
  let fixture: ComponentFixture<AssafInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
