import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GeoCityData } from '../../core/models/cities.mode';

@Component({
  selector: 'app-weather-block',
  templateUrl: './weather-block.component.html',
  styleUrls: ['./weather-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherBlockComponent {
  @Input() selectedCity!: GeoCityData | null;
}
