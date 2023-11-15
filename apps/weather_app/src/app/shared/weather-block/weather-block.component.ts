import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-block',
  templateUrl: './weather-block.component.html',
  styleUrls: ['./weather-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherBlockComponent {}
