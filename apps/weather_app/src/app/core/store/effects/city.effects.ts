import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, switchMap } from 'rxjs/operators';
import { LocationService } from '../../services/location.service';
import { CitiesService } from '../../api/cities.service';
import { SimpleCityType } from '../../models/cities.mode';

import {
  loadInitialCity,
  loadInitialCitySuccess,
} from '../actions/city.actions';

@Injectable()
export class CityEffects {
  loadCity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInitialCity),
      exhaustMap(() =>
        this.locationService.getCurrentLocation().pipe(
          switchMap((coords) =>
            this.citiesService.getCityByCoords(coords.lat, coords.lng)
          ),
          switchMap((city: SimpleCityType[]) =>
            this.citiesService
              .getFullCityInfo(city[0].name)
              .pipe(map((info) => info[0]))
          ),
          map((city) => loadInitialCitySuccess({ value: city })),
          catchError(() => EMPTY)
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
