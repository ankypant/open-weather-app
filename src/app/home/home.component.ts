import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  public weatherData: OpenWeatherAPIResponse[];
  #destroy: Subject<boolean> = new Subject();

  constructor(private openWeatherService: OpenWeatherService) {}

  ngOnInit(): void {
    this.getWeatherDetails();
  }

  private getWeatherDetails(): void {
    this.openWeatherService
      .getWeather([
        City.Amsterdam,
        City.Athens,
        City.Paris,
        City.Prague,
        City.Rome,
      ])
      .pipe(takeUntil(this.#destroy), pluck('list'))
      .subscribe((weatherData: OpenWeatherAPIResponse[]) => {
        this.weatherData = weatherData;
      });
  }
}
