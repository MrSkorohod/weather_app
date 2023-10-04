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

  private readonly options: ApiOptions = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'X-Api-Key': environment.apiKey,
    },
  };

  constructor(private http: HttpClient) {}

  get<T>(path: string): Observable<T> {
    const fullUrl = `${this.apiUrl}/${path}`;

    return this.http.get(fullUrl, this.options).pipe(
      map((response: any) => response as T),
      catchError((error) => throwError(() => error))
    );
  }
}
