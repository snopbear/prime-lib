import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafTabviewComponent } from './tabview.component';

describe('AssafTabviewComponent', () => {
  let component: AssafTabviewComponent;
  let fixture: ComponentFixture<AssafTabviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafTabviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafTabviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
