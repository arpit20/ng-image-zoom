import { Component, OnInit, ElementRef,Input } from '@angular/core';
import * as $ from 'jquery';
import '../../../lib/image-zoom.js';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css']
})
export class ImageZoomComponent implements OnInit {

  @Input('zoom-type') zoomType : String;
  @Input('image-zoom') imageZoom : String;
  @Input('image-standard') imageStandard : String;
  @Input('image-thumbnails') imageThumbnails: Object[];

  thumbnailsFlag:Boolean = false;
  constructor(private el : ElementRef) { 

  }

  ngOnInit(){
    if(this.imageThumbnails && this.imageThumbnails.length>0)
      this.thumbnailsFlag = true;
  }

  ngAfterViewInit(){
    $('.zoom-image').imageZoom({});
  }

}
