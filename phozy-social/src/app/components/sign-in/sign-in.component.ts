import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit ,DoCheck{
  signInForm!: FormGroup;
  @Input() result!: any;
  @Input() errorResult!: any;
  @Output() onLoginFormSubmit = new EventEmitter();
  res: any;
  errorMessage!: string;
  isSending!: boolean;
  constructor(private fb:FormBuilder) {
    this.signInForm = this.fb.group({
      emailOrUsername: ['', [ Validators.required]],

      password: [
        '',
        [
          Validators.required,
          ,
        ],
      ],
    });
  }
  
  signIn() {
    this.isSending = true;
    const formValues=this.signInForm.value;
    const email_or_username = formValues.emailOrUsername;
    const password = formValues.password ;
    this.onLoginFormSubmit.emit({ email_or_username, password });
    this.errorResult = null;
  
  }


  ngOnInit() { }
  ngDoCheck() {
    if (this.errorResult && this.isSending) {
      this.isSending = false;
      const p = this.signInForm.get('password');
      p.setValue('')
        // the backend on certain routes returns an array of error messages
        if (Array.isArray(this.errorResult?.error?.message)) {
          this.errorMessage = this.errorResult?.error?.message.map((error) => {
            return error.param +': '+error.message
          }).join('<br>')
          return
        }
        this.errorMessage = this.errorResult?.error?.message;
    }
  }
}
