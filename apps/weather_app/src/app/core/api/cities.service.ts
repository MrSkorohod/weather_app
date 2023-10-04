import { Injectable } from '@angular/core';
import { ApiGeneralService } from './api-general.service';
import { Observable } from 'rxjs';

export type SimpleCityType = {
  country: string;
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private apiService: ApiGeneralService) {}

  getCityByCoords(lat: number, lng: number): Observable<SimpleCityType[]> {
    return this.apiService.get<any>(`reversegeocoding?lat=${lat}&lon=${lng}`); //TODO change type
  }

  getCitiesList(cityName: string): Observable<any> {
    //TODO change type
    return this.apiService.get<any>(`geocoding?city=${cityName}`);
  }
}
