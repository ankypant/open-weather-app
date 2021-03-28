import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HourlyModalComponent } from './hourly-modal.component';
import { TestingModule } from '@utils/testing.module';
import { By } from '@angular/platform-browser';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { hourlForeCast } from '@shared/mocks/hourly-forecasr.mock';
import { OpenWeatherService } from '@core/services/open-weather/open-weather.service';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';
import { citiesDetails } from '@shared/mocks/cities-weather.mock';

const openWeatherAPIResponse: OpenWeatherAPIResponse = citiesDetails.list[0];

// Mock Open weather API response
class OpenWeatherServiceMock extends OpenWeatherService {
  public getHourlyWeatherInfo(openWeatherAPIResponse) {
    return of({ ...hourlForeCast });
  }
}

describe('HourlyModalComponent', () => {
  let component: HourlyModalComponent;
  let fixture: ComponentFixture<HourlyModalComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [HourlyModalComponent],
        providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          {
            provide: OpenWeatherService,
            useClass: OpenWeatherServiceMock,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getWeatherDetails on init', () => {
    const spyOnGetHourlyWeatherInfo = spyOn(component, 'getHourlyWeatherInfo');
    component.ngOnInit();
    expect(spyOnGetHourlyWeatherInfo).toHaveBeenCalled();
  });

  it('should initial hourlyForecastDetails after calling getHourlyWeatherInfo', () => {
    component.ngOnInit();
    expect(component.hourlyForecastDetails$).not.toBe(null);
  });

  it('should create hour details div', () => {
    const hourlyForecastRef = fixture.debugElement.query(
      By.css('#hourlyForecast')
    );
    expect(hourlyForecastRef).toBeTruthy();
  });
});
