import { Injectable } from '@angular/core';
import { CitiesApiService } from '../api/cities-api.service';
import { Observable, map } from 'rxjs';
import {
  CityWeather,
  FullWeatherData,
  GeoCityData,
  SimpleCityType,
} from '@core/models';

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

  getFullWeatherInfo(lat: number, lng: number): Observable<FullWeatherData> {
    return this.citiesApiService.getFullWeatherInfo(lat, lng).pipe(
      map((apiResponce) => {
        return {
          ...apiResponce,
          main: {
            temp: apiResponce.main.temp,
            feelsLike: apiResponce.main.feels_like,
            pressure: apiResponce.main.pressure,
            humidity: apiResponce.main.humidity,
            tempMin: apiResponce.main.temp_min,
            tempMax: apiResponce.main.temp_max,
            seaLevel: apiResponce.main.sea_level,
            grndLevel: apiResponce.main.grnd_level,
          },
        };
      })
    );
  }
}
