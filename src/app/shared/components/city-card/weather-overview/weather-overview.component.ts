import { Component, Input } from '@angular/core';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

@Component({
  selector: 'app-weather-overview',
  templateUrl: './weather-overview.component.html',
  styleUrls: ['./weather-overview.component.scss'],
})
export class WeatherOverviewComponent {
  @Input() cityWeatherReport: OpenWeatherAPIResponse;
}
