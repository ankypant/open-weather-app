import { Component, Input } from '@angular/core';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

@Component({
  selector: 'app-temperature-details',
  templateUrl: './temperature-details.component.html',
  styleUrls: ['./temperature-details.component.scss'],
})
export class TemperatureDetailsComponent {
  @Input() cityWeatherReport: OpenWeatherAPIResponse;
}
