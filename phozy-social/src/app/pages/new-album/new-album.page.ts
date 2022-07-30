import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { INewAlbumForm } from '../../interfaces/new-album.interface';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.page.html',
  styleUrls: ['./new-album.page.scss'],
})
export class NewAlbumPage implements OnInit {
  isSending: boolean;
  isChecked = false;
newAlbumForm:FormGroup<INewAlbumForm>
  constructor(private formBuilder: FormBuilder,private apiService:ApiService) {
    
    this.newAlbumForm = this.formBuilder.group({
      privacy: [false],
      description: [''],
      title:['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]]
    })
  }
  ngOnInit() {
  }
  addNewAlbum() {
    console.log(this.newAlbumForm.get('privacy').value)
  }
  onNewAlbumSubmit(event: Event) {
    this.isSending=true
    event.preventDefault();
    const privacy = this.newAlbumForm.get('privacy').value;
    const title = this.newAlbumForm.get('title').value;
    const description = this.newAlbumForm.get('description').value;

    setTimeout(() => {
      this.newAlbumForm.reset()
  
},300)
}
}
