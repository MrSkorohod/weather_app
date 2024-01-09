import { Injectable } from '@angular/core';
import { CitiesApiService } from '../api/cities-api.service';
import { Observable, map } from 'rxjs';
import { CityWeather, GeoCityData, SimpleCityType } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private citiesApiService: CitiesApiService) {}

  getCityWeather(lat: number, lng: number): Observable<CityWeather> {
    return this.citiesApiService.getCityWeather(lat, lng).pipe(
      map((apiResponce) => ({
        temp: apiResponce.temp,
        humidity: apiResponce.humidity,
        sunset: apiResponce.sunset,
        sunrise: apiResponce.sunrise,
        windSpeed: apiResponce.wind_speed,
        windDegrees: apiResponce.wind_degrees,
        minTemp: apiResponce.min_temp,
        cloudPct: apiResponce.cloud_pct,
        feelsLike: apiResponce.feels_like,
        maxTemp: apiResponce.max_temp,
      }))
    );
  }

  getCityByCoords(lat: number, lng: number): Observable<SimpleCityType[]> {
    return this.citiesApiService.getCityByCoords(lat, lng);
  }

  getCitiesList(cityName: string): Observable<GeoCityData[]> {
    return this.citiesApiService.getCitiesList(cityName);
  }

  getFullCityInfo(name: string): Observable<GeoCityData[]> {
    return this.citiesApiService.getFullCityInfo(name);
  }
}
