import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { LocationService } from '../../services/location.service';
import { CitiesApiService } from '../../api/cities-api.service';
import { SimpleCityType } from '@core/models';

import { loadInitialCity, saveCity } from '../actions/city.actions';

@Injectable()
export class CityEffects {
  loadCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInitialCity),
      exhaustMap(() =>
        this.locationService.getCurrentLocation().pipe(
          switchMap((coords) =>
            this.citiesApiService.getCityByCoords(coords.lat, coords.lng).pipe(
              map((value) => value[0]),
              catchError((err) => {
                throw 'Error in getting city by coordinate. Details: ' + err;
              })
            )
          ),
          switchMap((city: SimpleCityType) =>
            this.citiesApiService.getFullCityInfo(city?.name).pipe(
              map((info) => info[0]),
              catchError((err) => {
                throw 'Error in getting full city information. Details: ' + err;
              })
            )
          ),
          map((city) => saveCity({ value: city })),
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
    private citiesApiService: CitiesApiService
  ) {}
}
