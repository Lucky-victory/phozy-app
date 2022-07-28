import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required,Validators.pattern(/[a-zA-Z0-9]{6,}/)]],
      username:['']
    })
   }

  ngOnInit() {
  
  }

}
