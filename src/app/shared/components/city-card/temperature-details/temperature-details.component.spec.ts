import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TemperatureDetailsComponent } from './temperature-details.component';

import { TestingModule } from '@utils/testing.module';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

import { citiesDetails } from '@shared/mocks/cities-weather.mock';
import { By } from '@angular/platform-browser';

const openWeatherAPIResponse: OpenWeatherAPIResponse = citiesDetails.list[0];

describe('temperatureDetailsComponent', () => {
  let component: TemperatureDetailsComponent;
  let fixture: ComponentFixture<TemperatureDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [TemperatureDetailsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureDetailsComponent);
    component = fixture.componentInstance;
    // Assign value to the cityWeatherReport
    component.cityWeatherReport = { ...openWeatherAPIResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show temperature details', () => {
    const temperatureRef = fixture.debugElement.query(By.css('.temperature'));
    expect(temperatureRef).not.toBeNull();
  });
});
