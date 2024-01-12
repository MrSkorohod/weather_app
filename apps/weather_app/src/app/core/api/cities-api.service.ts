import { Injectable } from '@angular/core';
import { ApiGeneralService } from './api-general.service';
import { Observable } from 'rxjs';
import {
  CityWeatherApi,
  FullWeatherDataApi,
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
      `${this.apiService.ninjasApi}/reversegeocoding?lat=${lat}&lon=${lng}`
    );
  }

  getCitiesList(cityName: string): Observable<GeoCityDataApi[]> {
    return this.apiService.get<GeoCityDataApi[]>(
      `${this.apiService.ninjasApi}/geocoding?city=${cityName}`
    );
  }

  getCityWeather(lat: number, lng: number): Observable<CityWeatherApi> {
    return this.apiService.get<CityWeatherApi>(
      `${this.apiService.ninjasApi}/weather?lat=${lat}&lon=${lng}`
    );
  }

  getFullWeatherInfo(lat: number, lng: number): Observable<FullWeatherDataApi> {
    return this.apiService.get<FullWeatherDataApi>(
      `${this.apiService.openWeatherApi}/weather?lat=${lat}&lon=${lng}&units=metric`
    );
  }

  getFullCityInfo(name: string): Observable<GeoCityDataApi[]> {
    return this.apiService.get<GeoCityDataApi[]>(
      `${this.apiService.ninjasApi}/city?name=${name}`
    );
  }
}
