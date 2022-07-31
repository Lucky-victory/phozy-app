import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private apiService:ApiService) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    const username = this.activeRoute.snapshot.paramMap.get('username');
    this.apiService.getUserData(username).subscribe((res) => {
      alert(JSON.stringify(res))
    });
  }

}
