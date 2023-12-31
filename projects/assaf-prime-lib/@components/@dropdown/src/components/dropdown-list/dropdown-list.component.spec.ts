import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafDropdownListComponent } from './dropdown-list.component';

describe('DropdownListComponent', () => {
  let component: AssafDropdownListComponent;
  let fixture: ComponentFixture<AssafDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafDropdownListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
