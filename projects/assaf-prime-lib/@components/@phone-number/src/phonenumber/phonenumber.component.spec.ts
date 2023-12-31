import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafPhonenumberComponent } from './phonenumber.component';

describe('AssafPhonenumberComponent', () => {
  let component: AssafPhonenumberComponent;
  let fixture: ComponentFixture<AssafPhonenumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssafPhonenumberComponent],
    });
    fixture = TestBed.createComponent(AssafPhonenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
