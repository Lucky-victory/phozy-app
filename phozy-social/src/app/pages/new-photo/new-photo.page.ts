import { Component,  OnInit, } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { INewPhotoForm } from '../../interfaces/new-photo.interface';

@Component({
  selector: 'app-new-photo',
  templateUrl: './new-photo.page.html',
  styleUrls: ['./new-photo.page.scss'],
})
export class NewPhotoPage implements OnInit {
  isSending: boolean = false;
  photosToPreview: string[] = [];
  photosToUpload: File[] = [];
  userAlbums:any=[]
  newPhotoForm: FormGroup<INewPhotoForm>;

  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private authService:AuthService) {
    this.newPhotoForm = this.formBuilder.group({
      photosUpload:['',Validators.required],userAlbums:['',Validators.required]
    })
   }

  ngOnInit() {
    const user = this.authService.getUser();
    this.apiService.getUserAlbums(user.username as string).subscribe((res) => {
      this.userAlbums = res;
      console.log(res);
      
    })
  }

  addNewPhoto() {
  
  }
  loadImageFromDevice(event) {
    this.photosToPreview = [];
    const files = (event.target as HTMLInputElement).files;
    const filesArray = Array.from(files);
    if (files.length > 0) {
      for (const file of filesArray) {
        this.photosToUpload.push(file);
        console.log(this.photosToUpload);
        
        const reader = new FileReader(); 
      reader.onload = () => {
        
        this.photosToPreview.push(reader.result as string);
       
      }
      reader.readAsDataURL(file);
        
      }
    }

  }
}


