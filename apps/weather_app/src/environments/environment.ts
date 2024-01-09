export const environment = {
  prod: false,
  apiUrl: process.env['API_URL'] as string,
  apiKey: process.env['API_KEY'] as string,
  secondApiUrl: process.env['SECOND_API_URL'] as string,
  secondApiKey: process.env['SECOND_API_KEY'] as string,
};
