import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private readonly options = {
    'X-Api-Key': environment.ninjasApiKey,
  };

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const requestUrl = request.url;

    if (requestUrl.includes(environment.ninjasApiUrl)) {
      request = request.clone({
        headers: new HttpHeaders(this.options),
      });
    }
    if (requestUrl.includes(environment.openWeatherApiUrl)) {
      request = request.clone({
        url: `${requestUrl}&appid=${environment.openWeatherApiKey}`,
      });
    }

    return next.handle(request);
  }
}
