import { Component, Input } from '@angular/core';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

@Component({
  selector: 'app-temprature-details',
  templateUrl: './temprature-details.component.html',
  styleUrls: ['./temprature-details.component.scss'],
})
export class TempratureDetailsComponent {
  @Input() cityWeatherReport: OpenWeatherAPIResponse;
}
