import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-weather-info-table',
  templateUrl: './weather-info-table.component.html',
  styleUrls: ['./weather-info-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherInfoTableComponent {}
