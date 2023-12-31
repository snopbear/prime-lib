import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let component: AssafProgressBarComponent;
  let fixture: ComponentFixture<AssafProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
