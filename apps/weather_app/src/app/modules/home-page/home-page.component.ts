import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LocationService } from '../../core/services/location.service';
import { Observable, firstValueFrom, map, of, switchMap, tap } from 'rxjs';
import { CitiesService } from '../../core/api/cities.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  currentGeoCity$: Observable<string> = of('');

  constructor(
    private locationService: LocationService,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this.currentGeoCity$ = this.getCurrentCity().pipe(
      map((city) => city[0].name)
    );
  }

  getCurrentCity() {
    return this.locationService
      .getCurrentLocation()
      .pipe(
        switchMap((coords) =>
          this.citiesService.getCityByCoords(coords.lat, coords.lng)
        )
      );
  }
}
