export const environment = {
  prod: true,
  ninjasApiUrl: process.env['NINJAS_API_URL'] as string,
  ninjasApiKey: process.env['NINJAS_API_KEY'] as string,
  openWeatherApiUrl: process.env['OPENWEATHER_API_URL'] as string,
  openWeatherApiKey: process.env['OPENWEATHER_API_KEY'] as string,
};
