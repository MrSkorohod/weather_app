export type SimpleCityType = {
  country: string;
  name: string;
};

export interface GeoCityData {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  state?: string;
}

export type CityWeather = {
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
};
