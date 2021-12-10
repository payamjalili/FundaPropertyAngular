import { Component, HostListener, OnInit } from '@angular/core';
import { faImages, faSquare } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronRight,
  faChevronLeft,
  faSpinner,
  faVectorSquare,
  faRedoAlt,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { IMedia, IProperty } from '../../models';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  data!: IProperty;
  galleryImages!: Array<IMedia>;
  gallerySizeIndex!: number;
  galleryImageWidth!: number;
  galleryImageHeight!: number;
  galleryPosition: number = 0;
  showMore: boolean = false;

  faSpinner = faSpinner;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faVectorSquare = faVectorSquare;
  faSquare = faSquare;
  faImages = faImages;
  faRedoAlt = faRedoAlt;
  faPlay = faPlay;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    this.propertyService.getProperty().subscribe((response: IProperty) => {
      this.data = response;
      this.updateGalleryInfo();
    });
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.updateGalleryInfo();
  }

  updateGalleryInfo() {
    this.galleryImages = this.data.Media.filter((item) => item.Categorie == 1);

    this.gallerySizeIndex =
      window.innerWidth < 576 ? 1 : window.innerWidth < 992 ? 2 : 3;

    this.galleryImageWidth =
      this.galleryImages[0].MediaItems[this.gallerySizeIndex].Width;
    this.galleryImageHeight =
      this.galleryImages[0].MediaItems[this.gallerySizeIndex].Height;
  }

  getGalleryContainerWidth() {
    return this.galleryImages.length * this.galleryImageWidth;
  }

  goNextImage() {
    this.galleryPosition -= this.galleryImageWidth;
  }
  goPrevImage() {
    this.galleryPosition += this.galleryImageWidth;
  }
}
