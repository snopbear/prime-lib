import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafDataTableHeaderComponent } from './data-table-header.component';

describe('AssafDataTableHeaderComponent', () => {
  let component: AssafDataTableHeaderComponent;
  let fixture: ComponentFixture<AssafDataTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafDataTableHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafDataTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
