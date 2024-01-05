import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { LocationService } from '../../services/location.service';
import { CitiesService } from '../../api/cities.service';
import { SimpleCityType } from '@core/models';

import { loadInitialCity, savedCity } from '../actions/city.actions';

@Injectable()
export class CityEffects {
  loadCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInitialCity),
      exhaustMap(() =>
        this.locationService.getCurrentLocation().pipe(
          switchMap((coords) =>
            this.citiesService.getCityByCoords(coords.lat, coords.lng).pipe(
              map((value) => value[0]),
              catchError((err) => {
                throw 'Error in getting city by coordinate. Details: ' + err;
              })
            )
          ),
          switchMap((city: SimpleCityType) =>
            this.citiesService.getFullCityInfo(city?.name).pipe(
              map((info) => info[0]),
              catchError((err) => {
                throw 'Error in getting full city information. Details: ' + err;
              })
            )
          ),
          map((city) => savedCity({ value: city })),
          catchError((err) => {
            throw 'Error in getting current location. Details: ' + err;
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationService,
    private citiesService: CitiesService
  ) {}
}
