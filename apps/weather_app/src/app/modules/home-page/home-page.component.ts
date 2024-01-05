import {
  Observable,
  Subject,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
} from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CitiesService } from '../../core/api/cities.service';

import { Store } from '@ngrx/store';
import { saveCity } from '../../core/store/actions/city.actions';
import { GeoCityData } from '@core/models';

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

  constructor(
    private citiesService: CitiesService,
    private store: Store<{ saveCity: GeoCityData }>
  ) {}

  inputEnteredValue(value: string): void {
    this.searchValueSubject.next(value);
  }

  citySelected(value: GeoCityData): void {
    this.store.dispatch(saveCity({ value }));
  }
}
