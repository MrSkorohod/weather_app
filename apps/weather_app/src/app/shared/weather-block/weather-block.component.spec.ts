import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBlockComponent } from './weather-block.component';
import { TuiIslandModule } from '@taiga-ui/kit';

describe('WeatherBlockComponent', () => {
  let component: WeatherBlockComponent;
  let fixture: ComponentFixture<WeatherBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherBlockComponent],
      imports: [TuiIslandModule],
    });
    fixture = TestBed.createComponent(WeatherBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
