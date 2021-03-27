import { Component, Input, OnChanges } from '@angular/core';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnChanges {
  @Input() cityWeatherReport: OpenWeatherAPIResponse;

  ngOnChanges() {
    console.log(this.cityWeatherReport);
  }
}
