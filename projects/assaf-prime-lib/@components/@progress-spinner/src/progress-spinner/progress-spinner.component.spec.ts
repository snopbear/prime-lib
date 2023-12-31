import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafProgressSpinnerComponent } from './progress-spinner.component';

describe('AssafProgressSpinnerComponent', () => {
  let component: AssafProgressSpinnerComponent;
  let fixture: ComponentFixture<AssafProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafProgressSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
