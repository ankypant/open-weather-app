import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OpenWeatherService } from '@core/services/open-weather/open-weather.service';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';
import { HourlyForecastDetails } from '@shared/models/owa-hourly-api.model';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-hourly-modal',
  templateUrl: './hourly-modal.component.html',
  styleUrls: ['./hourly-modal.component.scss'],
})
export class HourlyModalComponent implements OnInit {
  #destroy: Subject<boolean> = new Subject();
  public hourlyForecastDetails$: Observable<HourlyForecastDetails>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public cityDetails: OpenWeatherAPIResponse,
    private openWeatherService: OpenWeatherService
  ) {}

  ngOnInit(): void {
    this.hourlyForecastDetails$ = this.openWeatherService
      .getHourlyWeatherInfo(this.cityDetails)
      .pipe(takeUntil(this.#destroy));
  }
}
