// Import all the shared components

import { CityCardComponent } from './city-card/city-card.component';
import { WeatherOverviewComponent } from './city-card/weather-overview/weather-overview.component';
import { TemperatureDetailsComponent } from './city-card/temperature-details/temperature-details.component';
import { WeatherIconComponent } from './city-card/weather-icon/weather-icon.component';
import { HourlyModalComponent } from './hourly-modal/hourly-modal.component';

export const components: any[] = [
  CityCardComponent,
  HourlyModalComponent,
  WeatherOverviewComponent,
  TemperatureDetailsComponent,
  WeatherIconComponent,
];
