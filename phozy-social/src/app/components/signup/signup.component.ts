import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {catchError} from 'rxjs/operators'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private authService:AuthService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      fullname: ['', [Validators.required, Validators.maxLength(30)]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
          ),
        ],
      ],
      username: ['',Validators.pattern(/^([a-z0-9])(.*?[_-])/)],
    });
  }

  ngOnInit() { }
  signUp() {
    const value = this.signUpForm.value;
    if (value.email && value.password && value.password) {
      
      this.authService.signUp({fullname:value.fullname,email: value.email, password:value.password,username: value.username,confirm_password:value.confirm_password}).pipe(catchError((error)=>{
        console.log(error)
        return error
      })).subscribe(() => {
        console.log('user added');
        this.router.navigateByUrl('/')
      })
    }
  }
}
