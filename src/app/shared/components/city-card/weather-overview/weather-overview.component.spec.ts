import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WeatherOverviewComponent } from './weather-overview.component';

import { TestingModule } from '@utils/testing.module';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

import { citiesDetails } from '@shared/mocks/cities-weather.mock';
import { By } from '@angular/platform-browser';

const openWeatherAPIResponse: OpenWeatherAPIResponse = citiesDetails.list[0];

describe('WeatherOverviewComponent', () => {
  let component: WeatherOverviewComponent;
  let fixture: ComponentFixture<WeatherOverviewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [WeatherOverviewComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOverviewComponent);
    component = fixture.componentInstance;
    // Assign value to the cityWeatherReport
    component.cityWeatherReport = { ...openWeatherAPIResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show Overview details', () => {
    const overviewDetailsRef = fixture.debugElement.query(
      By.css('#overviewDetails')
    );
    expect(overviewDetailsRef).not.toBeNull();
  });
});
