import {
  Observable,
  Subject,
  debounceTime,
  filter,
  map,
  of,
  switchMap,
} from 'rxjs';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CitiesService } from '../../core/api/cities.service';

import { Store } from '@ngrx/store';
import { savedCity } from '../../core/store/actions/city.actions';
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

  public searchValue$: Observable<string>;
  public listOfCities$!: Observable<GeoCityData[]>;
  public selectedCityData$: Observable<GeoCityData> = this.store.pipe(
    filter((value) => !!value.saveCity?.name),
    map((value) => value.saveCity)
  );

  private searchValueSubject = new Subject<string>();

  constructor(
    private citiesService: CitiesService,
    private store: Store<{ saveCity: GeoCityData }>
  ) {
    this.searchValue$ = this.searchValueSubject.asObservable();
  }

  ngOnInit(): void {
    this.listOfCities$ = this.searchValue$.pipe(
      debounceTime(500),
      switchMap((inputValue: string) => {
        return inputValue
          ? this.citiesService
              .getCitiesList(inputValue)
              .pipe(map((citiesList) => citiesList))
          : of([]);
      })
    );
  }

  inputEnteredValue(value: string): void {
    this.searchValueSubject.next(value);
  }

  citySelected(value: GeoCityData): void {
    this.store.dispatch(savedCity({ value }));
  }
}
