import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
@Input() generalPhotos=[]
  isLoggedIn: boolean;
   @Output() onPhotoLike = new EventEmitter();
  @Output() onAddToAlbum = new EventEmitter();
  isModalOpen: boolean;
  photoForModal: any;
  constructor(private router:Router) { }

  ngOnInit() {}
 toProfile(photo) {
  this.router.navigate(['/profile',photo?.user?.username])
}
  like(photo) {
    if (!this.isLoggedIn) {
      alert(' please sign up or signIn')
      return
    }
    photo.liked = !photo?.liked;
    this.onPhotoLike.emit(photo);
  }
  addToAlbum(photo) {
    if (!this.isLoggedIn) {
      alert(' please sign up or signIn');
      return
    }
    
    this.onAddToAlbum.emit(photo);
  }
  showPhotoModal(photo) {
    this.isModalOpen = true;
    this.photoForModal = photo;
  }
  modalClose(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
