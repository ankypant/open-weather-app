import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';
import { HourlyModalComponent } from '../hourly-modal/hourly-modal.component';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent {
  @Input() cityWeatherReport: OpenWeatherAPIResponse;

  constructor(public dialog: MatDialog) {}

  public showHourlyForecastModal(cityDetails: OpenWeatherAPIResponse): void {
    this.dialog.open(HourlyModalComponent, {
      data: cityDetails,
      height: '80vh',
      width: '100vw',
    });
  }
}
