import { TestBed } from '@angular/core/testing';

import { ApiGeneralService } from './api-general.service';
import { HttpClient } from '@angular/common/http';

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
