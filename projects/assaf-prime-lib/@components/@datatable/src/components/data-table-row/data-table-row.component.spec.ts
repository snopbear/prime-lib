import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafDataTableRowComponent } from './data-table-row.component';

describe('AssafDataTableRowComponent', () => {
  let component: AssafDataTableRowComponent;
  let fixture: ComponentFixture<AssafDataTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafDataTableRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafDataTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
