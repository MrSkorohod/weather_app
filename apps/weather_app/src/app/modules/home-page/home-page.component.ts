import {
  Observable,
  Subject,
  debounceTime,
  filter,
  map,
  merge,
  of,
  switchMap,
} from 'rxjs';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { saveCity } from '../../core/store/actions/city.actions';
import { FullWeatherData, GeoCityData } from '@core/models';
import { CitiesService } from '@core/services';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  public currentGeoCity$: Observable<string> = this.store.pipe(
    map((value) => value.saveCity.name)
  );

  public selectedCityData$: Observable<GeoCityData> = this.store.pipe(
    filter((value) => !!value.saveCity?.name),
    map((value) => value.saveCity)
  );

  private readonly searchValueSubject = new Subject<string>();
  public readonly searchValue$: Observable<string> =
    this.searchValueSubject.asObservable();

  public readonly listOfCities$: Observable<GeoCityData[]> =
    this.searchValue$.pipe(
      debounceTime(500),
      switchMap((inputValue: string) => {
        return inputValue
          ? this.citiesService
              .getCitiesList(inputValue)
              .pipe(map((citiesList) => citiesList))
          : of([]);
      })
    );

  private readonly cityChanged$ = new Subject<void>();
  public readonly cityWeather$: Observable<FullWeatherData | null> = merge(
    this.cityChanged$.asObservable().pipe(map(() => null)),
    this.store.pipe(
      filter((value) => !!value.saveCity?.name),
      map((value) => {
        return {
          lat: value.saveCity.latitude,
          lng: value.saveCity.longitude,
        };
      }),
      switchMap((coords) =>
        this.citiesService.getFullWeatherInfo(coords.lat, coords.lng)
      )
    )
  );

  constructor(
    private store: Store<{ saveCity: GeoCityData }>,
    private citiesService: CitiesService
  ) {}

  inputEnteredValue(value: string): void {
    this.searchValueSubject.next(value);
  }

  citySelected(value: GeoCityData): void {
    this.cityChanged$.next();
    this.store.dispatch(saveCity({ value }));
  }
}
