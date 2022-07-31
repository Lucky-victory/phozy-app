import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISignInForm } from 'src/app/interfaces/sign-in.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  result: any;
  errorResult: any;
  isSending: boolean;
  errorMessage: string;
  signInForm:FormGroup<ISignInForm>
  constructor(private authService:AuthService,private router:Router,private fb:FormBuilder) {
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
  
  ngOnInit() {
    // if the user is already logged in, redirect back to homepage
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/')
    }
  }
  signIn() {
     const email_or_username = this.signInForm.get('emailOrUsername').value;
    const password = this.signInForm.get('password').value;

    this.errorResult = null;
    this.isSending = true;
    this.authService.signIn(email_or_username, password).subscribe((res) => {
      this.result = res;
      this.isSending=false
    this.router.navigateByUrl('/')
    }, error => {
      this.isSending = false;
      this.errorResult = error;
      this.errorMessage = this.errorResult?.error?.message;
 }) 
}
}
