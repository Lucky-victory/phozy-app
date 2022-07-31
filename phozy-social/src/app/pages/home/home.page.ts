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
    
    this.isLoggedIn = this.authService.isLoggedIn();
  
  }
  loadMore(event) {
    this.currentPage += 1;
this.apiService.getGeneral(this.currentPage).subscribe((response => {
  setTimeout(() => {
  
    event.target.complete();
  if (!response.data?.length) {
    this.noMoreData = true;
    event.target.disabled = true;
  }    

      
  this.generalResult.push(...response.data)
    }, 500);
    
    }));
  }
  likeOrUnlikePhoto([photo, isLiked]) {
    console.log(photo);
    
    if (isLiked) {
      this.apiService.unlikePhoto(photo.pid);
      console.log('unlike');
      
    }
    else {
      this.apiService.likePhoto(photo.pid);
      console.log('like');
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/')
  }
}
