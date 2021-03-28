import {
  Description,
  HourlyForecastDetails,
  Icon,
  Main,
} from '../models/owa-hourly-api.model';

export const hourlForeCast: HourlyForecastDetails = {
  lat: 52.374,
  lon: 4.8897,
  timezone: 'Europe/Amsterdam',
  timezone_offset: 7200,
  hourly: [
    {
      dt: 1616947200,
      temp: 10.46,
      feels_like: 3.62,
      pressure: 1024,
      humidity: 71,
      dew_point: 5.43,
      uvi: 0.46,
      clouds: 75,
      visibility: 10000,
      wind_speed: 8.29,
      wind_deg: 233,
      wind_gust: 15.67,
      weather: [
        {
          id: 803,
          main: Main.Clouds,
          description: Description.BrokenClouds,
          icon: Icon.The04D,
        },
      ],
      pop: 0,
    },
    {
      dt: 1616950800,
      temp: 9.93,
      feels_like: 3.18,
      pressure: 1024,
      humidity: 74,
      dew_point: 5.52,
      uvi: 0.14,
      clouds: 87,
      visibility: 10000,
      wind_speed: 8.18,
      wind_deg: 231,
      wind_gust: 15.62,
      weather: [
        {
          id: 803,
          main: Main.Clouds,
          description: Description.OvercastClouds,
          icon: Icon.The04D,
        },
      ],
      pop: 0,
    },
  ],
};
