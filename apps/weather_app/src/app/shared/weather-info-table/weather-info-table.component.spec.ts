import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoTableComponent } from './weather-info-table.component';

describe('WeatherInfoTableComponent', () => {
  let component: WeatherInfoTableComponent;
  let fixture: ComponentFixture<WeatherInfoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherInfoTableComponent],
    });
    fixture = TestBed.createComponent(WeatherInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
