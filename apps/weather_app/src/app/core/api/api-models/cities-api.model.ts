export interface CityWeatherApi {
  wind_speed: number;
  wind_degrees: number;
  temp: number;
  humidity: number;
  sunset: number;
  min_temp: number;
  cloud_pct: number;
  feels_like: number;
  sunrise: number;
  max_temp: number;
}

export interface SimpleCityTypeApi {
  country: string;
  name: string;
}

export interface GeoCityDataApi {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  state?: string;
}
