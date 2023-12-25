import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafPrimeLibComponent } from './assaf-prime-lib.component';

describe('AssafPrimeLibComponent', () => {
  let component: AssafPrimeLibComponent;
  let fixture: ComponentFixture<AssafPrimeLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssafPrimeLibComponent]
    });
    fixture = TestBed.createComponent(AssafPrimeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
