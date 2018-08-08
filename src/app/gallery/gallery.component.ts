import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image/shared/image.service'
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

title="photos";

@Input() filterBy?: string = 'all';
visibleImage :any[] =[];
  constructor(private imageService:ImageService) {

    this.visibleImage = this.imageService.getImages();

   }

  ngOnInit() {
  }

OnChanges(imageService:ImageService){
this.visibleImage = this.imageService.getImages();

}



}
