import { Observable, Subject, debounceTime, map, of, switchMap } from 'rxjs';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocationService } from '../../core/services/location.service';
import { CitiesService } from '../../core/api/cities.service';

// import { saveEnteredCity } from '../../core/store/actions/city.actions';
// import { Store } from '@ngrx/store';
// import { GeoCityData } from '../../core/models/cities.mode';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  currentGeoCity$: Observable<string> = this.getCurrentCity();

  public searchValue$: Observable<string>;
  public listOfCities$!: Observable<string[]>;

  private searchValueSubject = new Subject<string>();

  constructor(
    private locationService: LocationService,
    private citiesService: CitiesService
  ) // private store: Store<{ saveCity: string }>
  {
    // this.searchValue$ = store.select('saveCity');
    this.searchValue$ = this.searchValueSubject.asObservable();
  }

  ngOnInit(): void {
    this.listOfCities$ = this.searchValue$.pipe(
      debounceTime(500),
      switchMap((inputValue: string) => {
        return inputValue
          ? this.citiesService
              .getCitiesList(inputValue)
              .pipe(map((citiesList) => citiesList.map((city) => city.name)))
          : of([]);
      })
    );
  }

  inputEnteredValue(value: string): void {
    this.searchValueSubject.next(value);
    // this.store.dispatch(saveEnteredCity({value: ev}));
  }

  private getCurrentCity(): Observable<string> {
    return this.locationService.getCurrentLocation().pipe(
      switchMap((coords) =>
        this.citiesService.getCityByCoords(coords.lat, coords.lng)
      ),
      map((city) => city[0]?.name || '')
    );
  }
}
