import { Component, OnInit } from '@angular/core';
import { IProperty } from '../../models';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  data!: IProperty;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.getProperty();
  }

  getProperty() {
    this.propertyService
      .getProperty()
      .subscribe((response: IProperty) => (this.data = response));
  }
}
