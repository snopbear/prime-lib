import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafDataTableSearchInputComponent } from './data-table-search-input.component';

describe('DataTableComponent', () => {
  let component: AssafDataTableSearchInputComponent;
  let fixture: ComponentFixture<AssafDataTableSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafDataTableSearchInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafDataTableSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
