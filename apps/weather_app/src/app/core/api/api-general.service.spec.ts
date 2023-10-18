import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ApiGeneralService } from './api-general.service';

describe('ApiGeneralService', () => {
  let service: ApiGeneralService;
  let http: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: http,
        },
      ],
    });

    service = TestBed.inject(ApiGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
