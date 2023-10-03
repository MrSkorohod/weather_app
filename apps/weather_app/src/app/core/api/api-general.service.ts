import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ApiOptions } from '../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class ApiGeneralService {
  // apiUrl =  process.env['API_URL'];
  apiUrl = 'https://api.api-ninjas.com/v1';

  private options: ApiOptions = {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'X-Api-Key': 'VZwYbLdhnw/QoR8PTewjnQ==uJdJ9udX3JyIB1on',
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
