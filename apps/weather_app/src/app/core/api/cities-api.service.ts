import { Injectable } from '@angular/core';
import { ApiGeneralService } from './api-general.service';
import { Observable } from 'rxjs';
import {
  CityWeatherApi,
  GeoCityDataApi,
  SimpleCityTypeApi,
} from '@core/api-models';

@Injectable({
  providedIn: 'root',
})
export class CitiesApiService {
  constructor(private apiService: ApiGeneralService) {}

  getCityByCoords(lat: number, lng: number): Observable<SimpleCityTypeApi[]> {
    return this.apiService.get<SimpleCityTypeApi[]>(
      `reversegeocoding?lat=${lat}&lon=${lng}`
    );
  }

  getCitiesList(cityName: string): Observable<GeoCityDataApi[]> {
    return this.apiService.get<GeoCityDataApi[]>(`geocoding?city=${cityName}`);
  }

  getCityWeather(lat: number, lng: number): Observable<CityWeatherApi> {
    return this.apiService.get<CityWeatherApi>(`weather?lat=${lat}&lon=${lng}`);
  }

  getFullCityInfo(name: string): Observable<GeoCityDataApi[]> {
    return this.apiService.get<GeoCityDataApi[]>(`city?name=${name}`);
  }
}
