import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafButtonComponent } from './button.component';

describe('AssafButtonComponent', () => {
  let component: AssafButtonComponent;
  let fixture: ComponentFixture<AssafButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
