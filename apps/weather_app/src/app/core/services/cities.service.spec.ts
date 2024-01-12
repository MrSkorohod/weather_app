import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { CitiesApiService } from '@core/api-services';

describe('CitiesService', () => {
  let service: CitiesService;
  let citiesApiService: jasmine.SpyObj<CitiesApiService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CitiesApiService,
          useValue: citiesApiService,
        },
      ],
    });
    service = TestBed.inject(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
