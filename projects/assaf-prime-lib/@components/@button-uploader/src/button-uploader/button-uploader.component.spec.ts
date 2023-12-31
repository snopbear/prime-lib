import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssafButtonUploaderComponent } from './button-uploader.component';

describe('AssafButtonUploaderComponent', () => {
  let component: AssafButtonUploaderComponent;
  let fixture: ComponentFixture<AssafButtonUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssafButtonUploaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssafButtonUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
