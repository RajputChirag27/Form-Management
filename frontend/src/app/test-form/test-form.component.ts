import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormServiceService } from '../services/form-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {
  testForm: FormGroup;
  states: string[] = [];

  constructor(private fb: FormBuilder, private formService: FormServiceService, 
    private router : Router) {
    this.testForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      isMarried: [false],
      country: ['', Validators.required],
      state: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }

  STATES: { [key: string]: { states: string[] } } = {
    India: {
      states: ["Uttar Pradesh", "Gujarat", "Maharashtra", "Rajasthan", "Karnataka", "Tamil Nadu", "Kerala"]
    },
    USA: {
      states: ["New York", "California", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio"]
    },
    England: {
      states: ["London", "Manchester", "Birmingham", "Liverpool"]
    }
  };

  ngOnInit() {
    this.testForm.get('country')?.valueChanges.subscribe(selectedCountry => {
      this.updateStates(selectedCountry);
    });
  }

  updateStates(country: string) {
    if (this.STATES[country]) {
      this.states = this.STATES[country].states;
      this.testForm.get('state')?.setValue('');
    } else {
      this.states = [];
    }
  }

  submitForm() {
    if (this.testForm.valid) {
      console.log('Form Submitted!', this.testForm.value);
        this.formService.sendData(this.testForm.value).subscribe(
          response => {
            console.log('Server response:', response);
            this.router.navigate(['/homepage/results'])
          },
          error => {
            console.error('Error occurred:', error);
          }
        );
  }else {
      console.log('Form is not valid');
      Object.keys(this.testForm.controls).forEach(controlName => {
        const control = this.testForm.get(controlName);
        if (control && control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  getCountries(): string[] {
    return Object.keys(this.STATES);
  }
}

export class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
