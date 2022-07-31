import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,DoCheck {
  generalResult!: any;
  isLoggedIn!: boolean;
  currentPage = 1;
  noMoreData:boolean;
  isLoading: boolean=true;
  constructor(private apiService:ApiService,private authService:AuthService,private router:Router ) {
    
  }

  ngOnInit() {
    this.apiService.getGeneral(this.currentPage).subscribe((response => {
      this.generalResult = response.data
      this.isLoading = false;
    
    }));
    this.isLoggedIn=this.authService.isLoggedIn()
  }
  ngDoCheck(): void {
    
    this.isLoggedIn=this.authService.isLoggedIn()
  }
  loadMore() {
    this.currentPage += 1;
this.apiService.getGeneral(this.currentPage).subscribe((response => {
  if (!response.data?.length) {
    this.noMoreData = true;
    return
  }    
  this.generalResult.push(...response.data)
    
    }));
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/')
  }
}
