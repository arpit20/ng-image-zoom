import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../core/header/header.component';
import { FooterComponent } from '../core/footer/footer.component';
import { ImageZoomComponent } from '../shared/image-zoom/image-zoom.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  thumbnails : Object[];

  constructor() { }

  ngOnInit() {
    this.thumbnails = [{
      thumbnailImage:'./../../assets/images/phone/pink-2_1_thumbnail.png',
      standardImage:'./../../assets/images/phone/pink-2_1.png',
      zoomImage:'/../../assets/images/phone/pink-2_1_zoom.png'
    },{
      thumbnailImage:'./../../assets/images/3_thumbnail_2.jpg',
      standardImage:'./../../assets/images/3_standard_2.jpg',
      zoomImage:'/../../assets/images/3_zoom_2.jpg'

    }
     
    ]
  }

}
