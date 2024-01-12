import { TestBed } from '@angular/core/testing';

import { CitiesApiService } from './cities-api.service';
import { ApiGeneralService } from './api-general.service';
import { of } from 'rxjs';

describe('CitiesApiService', () => {
  let service: CitiesApiService;
  let apiGeneralService: jasmine.SpyObj<ApiGeneralService>;

  beforeEach(() => {
    apiGeneralService = jasmine.createSpyObj('apiGeneralService', ['get']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: ApiGeneralService,
          useValue: apiGeneralService,
        },
      ],
    });

    service = TestBed.inject(CitiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get city data by coordinates', (done: DoneFn) => {
    const lat = 53;
    const lng = 27;

    const expectedCity = [
      {
        name: 'Блеўчыцкі сельскі Савет',
        country: 'BY',
        state: 'Minsk Region',
      },
    ];

    apiGeneralService.get.and.returnValue(of(expectedCity));

    service.getCityByCoords(lat, lng).subscribe({
      next: (city) => {
        expect(city).withContext('expected city').toEqual(expectedCity);
        done();
      },
      error: done.fail,
    });

    expect(apiGeneralService.get.calls.count()).withContext('one call').toBe(1);
  });

  it('shold return cities list by part of name', (done: DoneFn) => {
    const partName = 'Mos';

    const expectedCitiesList = [
      {
        name: 'Mos',
        latitude: 42.2030958,
        longitude: -8.6085418,
        country: 'ES',
        state: 'Galicia',
      },
      {
        name: 'Moux',
        latitude: 43.1818,
        longitude: 2.64968,
        country: 'FR',
        state: 'Occitania',
      },
      {
        name: 'Mossa',
        latitude: 45.9385932,
        longitude: 13.5482396,
        country: 'IT',
        state: 'Friuli-Venezia Giulia',
      },
      {
        name: 'Mos',
        latitude: 42.1977155,
        longitude: -8.5965216,
        country: 'ES',
        state: 'Galicia',
      },
      {
        name: 'Mozkand',
        latitude: 40.0717117,
        longitude: 46.1358379,
        country: 'AZ',
        state: 'East Zangezur',
      },
    ];

    apiGeneralService.get.and.returnValue(of(expectedCitiesList));

    service.getCitiesList(partName).subscribe({
      next: (citiesList) => {
        expect(citiesList)
          .withContext('expected cities list')
          .toEqual(expectedCitiesList);
        done();
      },
      error: done.fail,
    });

    expect(apiGeneralService.get.calls.count()).withContext('one call').toBe(1);
  });
});
