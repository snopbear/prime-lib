import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInputErrors } from 'assaf-prime-lib/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prime-lib';
  form: FormGroup = this.__fb.group({
    email: ['', [Validators.required, Validators.email]],
    comment: ['', Validators.required],
  });

  emailErrors: FormInputErrors = {
    required: '*',
    email: 'Hello',
  };
  commentErrors: FormInputErrors = {
    required: 'Required',
  };
  constructor(private __fb: FormBuilder) {}

  Approve() {
    const val = this.form.value;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      debugger;
      let approveRequest = {
        email: this.form.controls['email'].value,
        comment: this.form.controls['comment'].value,
      };
      console.log(approveRequest);
    }
  }
}
