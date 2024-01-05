export interface SimpleCityType {
  country: string;
  name: string;
}

export interface GeoCityData {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  state?: string;
}

export interface CityWeather {
  windSpeed: number;
  windDegrees: number;
  temp: number;
  humidity: number;
  sunset: number;
  minTemp: number;
  cloudPct: number;
  feelsLike: number;
  sunrise: number;
  maxTemp: number;
}
