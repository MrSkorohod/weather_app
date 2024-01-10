import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ApiOptions } from '../models/api.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiGeneralService {
  apiUrl = environment.apiUrl;
  secondApiUrl = environment.secondApiUrl;

  private readonly options: ApiOptions = {
    headers: {
      'X-Api-Key': environment.apiKey,
    },
  };

  private readonly optionsForSecondApi: ApiOptions = {
    headers: {
      'X-Api-Key': environment.secondApiKey,
    },
  };

  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T>;
  get<T>(path: string, useOtherApi: boolean): Observable<T>;
  get<T>(path?: string, useOtherApi?: boolean): Observable<T> {
    const fullUrl = useOtherApi
      ? `${this.secondApiUrl}/${path}&appid=${environment.secondApiKey}`
      : `${this.apiUrl}/${path}`;

    const options = useOtherApi ? {} : this.options;

    return this.http.get(fullUrl, options).pipe(
      map((response: unknown) => response as T),
      catchError((error) => throwError(() => error))
    );
  }
}
