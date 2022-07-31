import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  albums!: any;
  isLoggedIn!: boolean;
  constructor(private apiService:ApiService,private authService:AuthService ) {
    
  }

  ngOnInit() {
    this.apiService.getGeneral().subscribe((response => {
      this.albums = response.data ;
  console.log(response);
  
    
    }));
    this.isLoggedIn=this.authService.isLoggedIn()
  }
  logout() {
    this.authService.logout()
  }
}
