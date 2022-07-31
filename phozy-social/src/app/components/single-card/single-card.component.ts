import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.scss'],
})
export class SingleCardComponent implements OnInit {
  @Input() photo = {};
  @Output() onPhotoLike = new EventEmitter();
  @Output() onAddToAlbum = new EventEmitter();
  @Input() isAuthenticated: boolean=true;
  constructor(private router:Router) { }

  ngOnInit() {}
  toProfile(photo) {
  this.router.navigate(['/profile',photo?.user?.username])
}
  like(photo) {
    if (!this.isAuthenticated) {
      alert('not auth, please sign up or signIn')
      return
    }
    photo.liked = !photo?.liked;
    this.onPhotoLike.emit(photo);
  }
  addToAlbum(photo) {
    if (!this.isAuthenticated) {
      alert('not auth, please sign up or signIn');
      return
    }
    
    this.onAddToAlbum.emit(photo);
  }
  showPhotoModal(photo) {
  
}
}
