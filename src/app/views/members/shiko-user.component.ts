import { AlertifyService } from './../../_services/alertify.service';
import { UserService } from './../../_services/User.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../../_models/User';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-shiko-user',
  templateUrl: 'shiko-user.component.html',

})
export class ShikoUserComponent implements OnInit {
  user: Users;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private userService : UserService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['users'];
    })

    this.galleryOptions = [
      {
      width: '500px',
      height: '500px',
      imagePercent: 100,
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    },
    { "thumbnailsMoveSize": 4 },
    { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
    { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
    ];
    this.galleryImages = this.getImages();
  }

  getImages()
{
  const imageUrls = [];
  for (let i = 0; i < this.user.photos.length; i++){
    imageUrls.push({
      small: this.user.photos[i].url,
      medium: this.user.photos[i].url,
      big: this.user.photos[i].url,
      description: this.user.photos[i].description
    });
  }
  return imageUrls;
}


}
