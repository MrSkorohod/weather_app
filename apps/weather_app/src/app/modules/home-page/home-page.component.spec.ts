import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import { CitiesService } from '../../core/api/cities.service';
import { of } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let citiesService: jasmine.SpyObj<CitiesService>;

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
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
