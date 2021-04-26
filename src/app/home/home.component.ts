import { Component, OnDestroy, OnInit } from '@angular/core';
import { OpenWeatherService } from '@core/services/open-weather/open-weather.service';
import { Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { City } from '@shared/models/owa-city-details';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public weatherData: OpenWeatherAPIResponse[];
  #destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  ngOnDestroy(): void {
    this.#destroy$.next(true);
    this.#destroy$.unsubscribe();
  }

  /**
   * getWeatherDetails calls the openWeatherService to
   * get the weather report of the 5 european cities
   */
  public getWeatherDetails(): void {
    this.openWeatherService
      .getWeather([
        City.Amsterdam,
        City.Athens,
        City.Paris,
        City.Prague,
        City.Rome,
      ])
      .pipe(pluck('list'), takeUntil(this.#destroy$))
      .subscribe((weatherData: OpenWeatherAPIResponse[]) => {
        this.weatherData = weatherData;
      });
  }
}
