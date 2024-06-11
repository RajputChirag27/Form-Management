import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  contactForm : FormGroup;

  constructor(private fb : FormBuilder){
    this.contactForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required, Validators.email],
      message : ['', Validators.required]
    })
  }

  submitForm(){
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
    } else {
      console.log('Form is not valid');
      Object.keys(this.contactForm.controls).forEach(controlName => {
        const control = this.contactForm.get(controlName);
        if (control && control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
