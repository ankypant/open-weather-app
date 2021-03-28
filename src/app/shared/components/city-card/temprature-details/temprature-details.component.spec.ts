import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TempratureDetailsComponent } from './temprature-details.component';

import { TestingModule } from '@utils/testing.module';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';

import { citiesDetails } from '@shared/mocks/cities-weather.mock';
import { By } from '@angular/platform-browser';

const openWeatherAPIResponse: OpenWeatherAPIResponse = citiesDetails.list[0];

describe('TempratureDetailsComponent', () => {
  let component: TempratureDetailsComponent;
  let fixture: ComponentFixture<TempratureDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [TempratureDetailsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TempratureDetailsComponent);
    component = fixture.componentInstance;
    // Assign value to the cityWeatherReport
    component.cityWeatherReport = { ...openWeatherAPIResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show temprature details', () => {
    const tempratureRef = fixture.debugElement.query(By.css('.temprature'));
    expect(tempratureRef).not.toBeNull();
  });
});
