import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { OWAAPIData } from '@shared/models/open-weather-api.model';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  constructor(private httpClient: HttpClient) {}

  public getWeather(cityIds: number[]): Observable<OWAAPIData> {
    return this.httpClient.get<OWAAPIData>(
      `${environment.openWeatherAPI_URL_get_by_cityname}?id=${cityIds}&appid=${environment.openWeatherAPIKey}&units=metric`
    );
  }
}
