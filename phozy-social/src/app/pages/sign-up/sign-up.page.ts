import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  isSending: boolean;
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
      confirmPassword: [
        '',
        [
          Validators.required,
        ],
      ],
      username: ['',Validators.pattern(/^([a-z0-9])/)],
    });
  }

  ngOnInit() { }
  signUp(event:Event) {
    event.preventDefault();
     this.isSending = true;
    const value = this.signUpForm.value;
      this.authService.signUp({fullname:value.fullname,email: value.email, password:value.password,username: value.username,confirm_password:value.confirmPassword}).subscribe(() => {
        this.isSending = false;
        this.router.navigateByUrl('/')
      },(error)=>{
        this.isSending = false;  
      })
    
  }
}
