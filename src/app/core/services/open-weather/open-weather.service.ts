import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import {
  OpenWeatherAPIResponse,
  OWAAPIData,
} from '@shared/models/open-weather-api.model';
import { HourlyForecastDetails } from '@shared/models/owa-hourly-api.model';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  constructor(private httpClient: HttpClient) {}

  /**
   * getWeather fetches the current weather report
   * of the specified cities
   * @param cityIds string[]
   * @returns an Observable<OWAAPIData>
   */
  public getWeather(cityIds: number[]): Observable<OWAAPIData> {
    return this.httpClient.get<OWAAPIData>(
      `${environment.openWeatherAPI_URL_get_by_cityname}?id=${cityIds}&units=metric&appid=${environment.openWeatherAPIKey}`
    );
  }

  /**
   * getHourlyWeatherInfo fetches the hourly forecast for
   * a specific city based on the city's lat and long values.
   * It excludes daily,minutely,current,alerts as they are not relevent
   * for this project
   * @param cityDetails
   * @returns an Observable<HourlyForecastDetails>
   */
  public getHourlyWeatherInfo(
    cityDetails: OpenWeatherAPIResponse
  ): Observable<HourlyForecastDetails> {
    return this.httpClient.get<HourlyForecastDetails>(
      `${environment.openWeatherAPI_URL_getAll}?lat=${cityDetails.coord.lat}&lon=${cityDetails.coord.lon}&exclude=daily,minutely,current,alerts&units=metric&appid=${environment.openWeatherAPIKey}`
    );
  }
}
