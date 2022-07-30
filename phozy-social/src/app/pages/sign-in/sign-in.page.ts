import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  result: any;
  errorResult: any;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    // if the user is already logged in, redirect back to homepage
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/')
    }
  }
  signIn({email_or_username,password}) {
    
    this.authService.signIn(email_or_username, password).subscribe((res) => {
      this.result = res;
    this.router.navigateByUrl('/')
    }, error => {
      this.errorResult=error
 }) 
}
}
