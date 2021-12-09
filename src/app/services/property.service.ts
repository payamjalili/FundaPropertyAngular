import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProperty } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  URL =
    'http://localhost:4200/api/json/detail/ac1b0b1572524640a0ecc54de453ea9f/koop/e50c4ee3-1cf3-4e1d-bb81-60b23d28cb3a/';

  constructor(private http: HttpClient) {}

  getProperty() {
    return this.http.get<IProperty>(this.URL);
  }
}
