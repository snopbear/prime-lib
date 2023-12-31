import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafInputNumberComponent } from './input-number.component';

describe('AssafInputNumberComponent', () => {
  let component: AssafInputNumberComponent;
  let fixture: ComponentFixture<AssafInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafInputNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
