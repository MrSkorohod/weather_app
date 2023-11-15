import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBlockComponent } from './weather-block.component';

describe('WeatherBlockComponent', () => {
  let component: WeatherBlockComponent;
  let fixture: ComponentFixture<WeatherBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherBlockComponent],
    });
    fixture = TestBed.createComponent(WeatherBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
