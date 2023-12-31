import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafToastComponent } from './toast.component';

describe('AssafToastComponent', () => {
  let component: AssafToastComponent;
  let fixture: ComponentFixture<AssafToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafToastComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
