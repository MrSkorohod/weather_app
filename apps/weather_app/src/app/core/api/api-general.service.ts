import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ApiOptions } from '../models/api.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiGeneralService {
  readonly ninjasApi = environment.ninjasApiUrl;
  readonly openWeatherApi = environment.openWeatherApiUrl;

  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    return this.http.get(path).pipe(
      map((response: unknown) => response as T),
      catchError((error) => throwError(() => error))
    );
  }
}
