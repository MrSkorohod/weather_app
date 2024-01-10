export interface FullWeatherDataApi {
  base: string; //Internal parameter
  cod: number;
  coord: Coordinates;
  dt: number; //Time of data calculation, unix, UTC
  id: number;
  name: string;
  timezone: number;
  visibility: number; //  Visibility, meter. The maximum value of the visibility is 10 km
  main: MainWeatherInfoApi;
  sys: WeatherSystemDataApi;
  weather: WeatherDataApi[];
  wind: Wind;
  clouds: Clouds;
  rain?: Rain;
  snow?: Snow;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Snow {
  '1h'?: number;
  '3h'?: number;
}

export interface MainWeatherInfoApi {
  temp: number;
  feels_like: number;
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity, %
  temp_min: number;
  temp_max: number;
  sea_level: number; // Atmospheric pressure on the sea level, hPa
  grnd_level: number; // Atmospheric pressure on the ground level, hPa
}

export interface WeatherDataApi {
  id: number; // Weather condition id
  main: string; //Group of weather parameters (Rain, Snow, Clouds etc.)
  description: string;
  icon: string;
}

export interface WeatherSystemDataApi {
  type: number;
  id: string;
  message?: string;
  country: string; //Country code (GB, JP etc.)
  sunrise: number; // Sunrise time, unix, UTC
  sunset: number; //Sunset time, unix, UTC
}

export type Rain = Snow;
