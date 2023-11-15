import { Injectable } from '@angular/core';
import { ApiGeneralService } from './api-general.service';
import { Observable } from 'rxjs';
import {
  CityWeather,
  GeoCityData,
  SimpleCityType,
} from '../models/cities.mode';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private apiService: ApiGeneralService) {}

  getCityByCoords(lat: number, lng: number): Observable<SimpleCityType[]> {
    return this.apiService.get<SimpleCityType[]>(
      `reversegeocoding?lat=${lat}&lon=${lng}`
    );
  }

  getCitiesList(cityName: string): Observable<GeoCityData[]> {
    return this.apiService.get<GeoCityData[]>(`geocoding?city=${cityName}`);
  }

  getCityWeather(lat: number, lng: number): Observable<CityWeather> {
    return this.apiService.get<CityWeather>(`weather?lat=${lat}&lon=${lng}`);
  }
}
