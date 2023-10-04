import {
  Observable,
  debounceTime,
  firstValueFrom,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocationService } from '../../core/services/location.service';
import { CitiesService } from '../../core/api/cities.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  currentGeoCity$: Observable<string> = this.getCurrentCity();

  searchValue = '';

  constructor(
    private locationService: LocationService,
    private citiesService: CitiesService
  ) {}

  private getCurrentCity(): Observable<string> {
    return this.locationService.getCurrentLocation().pipe(
      switchMap((coords) =>
        this.citiesService.getCityByCoords(coords.lat, coords.lng)
      ),
      map((city) => city[0].name)
    );
  }

  searchCityByName(searchValue: string): void {
    this.citiesService
      .getCitiesList(searchValue)
      .pipe(
        debounceTime(1000),
        tap((data) => console.log(data))
      )
      .subscribe();
  }
}
