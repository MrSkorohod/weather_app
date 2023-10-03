import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  getCurrentLocation(): Observable<{ lat: number; lng: number }> {
    return new Observable((obs) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              const location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              obs.next(location);
              obs.complete();
            }
          },
          (error) => console.log(error)
        );
      } else {
        obs.error('Geolocation is not supported by this browser.');
      }
    });
  }
}
