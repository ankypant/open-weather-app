import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { TestingModule } from '@utils/testing.module';
import { OpenWeatherService } from '@core/services/open-weather/open-weather.service';
import { City } from '@shared/models/owa-city-details';
import { citiesDetails } from '@shared/mocks/cities-weather.mock';
import { of } from 'rxjs';

const city = City.Amsterdam;

// Mock Open weather API response
class OpenWeatherServiceMock extends OpenWeatherService {
  public getWeather([city]) {
    return of({ ...citiesDetails });
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [HomeComponent],
        providers: [
          {
            provide: OpenWeatherService,
            useClass: OpenWeatherServiceMock,
          },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getWeatherDetails on init', () => {
    const spyOnGetWeatherDetails = spyOn(component, 'getWeatherDetails');
    component.ngOnInit();
    expect(spyOnGetWeatherDetails).toHaveBeenCalled();
  });
});
