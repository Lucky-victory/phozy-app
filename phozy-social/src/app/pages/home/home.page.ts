import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {OnInit} from '@angular/core'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
albums:any
  constructor(private apiService:ApiService ) {
    
  }

  ngOnInit() {
    this.apiService.getAlbums().subscribe((value => {
      this.albums = value.photos ;
    
    }));
    
}
}
