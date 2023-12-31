import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafCalendarComponent } from './calendar.component';

describe('AssafCalendarComponent', () => {
  let component: AssafCalendarComponent;
  let fixture: ComponentFixture<AssafCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafCalendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
