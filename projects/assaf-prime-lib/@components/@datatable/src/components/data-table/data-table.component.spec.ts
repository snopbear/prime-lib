import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafDataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: AssafDataTableComponent;
  let fixture: ComponentFixture<AssafDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafDataTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
