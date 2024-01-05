import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomePageComponent } from './home-page.component';
import { CitiesService } from '../../core/api/cities.service';
import { SharedModule } from '../../shared/shared.module';
import { By } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GeoCityData } from '@core/models';

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

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    store?.resetSelectors();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have static title', () => {
    const titleElem = fixture.debugElement.query(By.css('h1'));
    expect(titleElem.nativeElement.textContent).toContain('Weather in');
  });
});
