import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomePageComponent } from './home-page.component';
import { CitiesService } from '../../core/api/cities.service';
import { SharedModule } from '../../shared/shared.module';

import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GeoCityData } from '../../core/models/cities.mode';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let citiesService: jasmine.SpyObj<CitiesService>;
  let store: MockStore<{ value: GeoCityData }>;
  const initialState = { value: {} };

  beforeEach(async () => {
    citiesService = jasmine.createSpyObj('citiesService', {
      getCityByCoords: of([]),
    });

    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [SharedModule],
      providers: [
        {
          provide: CitiesService,
          useValue: citiesService,
        },
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    store = TestBed.get(Store);

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
