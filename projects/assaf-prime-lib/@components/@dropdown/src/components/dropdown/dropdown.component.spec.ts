import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafDropdownComponent } from './dropdown.component';

describe('AssafDropdownComponent', () => {
  let component: AssafDropdownComponent;
  let fixture: ComponentFixture<AssafDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
