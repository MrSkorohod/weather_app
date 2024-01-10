import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FullWeatherData, GeoCityData } from '@core/models';

@Component({
  selector: 'app-weather-block',
  templateUrl: './weather-block.component.html',
  styleUrls: ['./weather-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherBlockComponent {
  @Input() selectedCity!: GeoCityData | null;
  @Input() cityWeather!: FullWeatherData | null;

  getWeatherPic(): string {
    return `https://openweathermap.org/img/wn/${this.cityWeather?.weather[0].icon}@2x.png`;
  }
}
