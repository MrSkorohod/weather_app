import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { ApiGeneralService } from './api-general.service';

describe('CitiesService', () => {
  let service: CitiesService;
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
    service = TestBed.inject(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
