import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

  like(photo) {
    if (!this.isAuthenticated) {
      alert('not auth, please sign up or login')
      return
    }
    photo.liked = !photo.liked;
this.onPhotoLike.emit(photo)
  }
  addToAlbum(photo) {
    if (!this.isAuthenticated) {
      alert('not auth, please sign up or login')
      return
    }
    
this.onAddToAlbum.emit(photo)
  }

}
