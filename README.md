# Open-weather-app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.x.

1. Angular version **11.1.2**
2. Node version **12.19.1**

## Summary

The app displays the current weather of 5 european cities (Amsterdam, Athens, Paris, Prague and Rome)
using the [openweathermap](https://openweathermap.org/api) API.

App displays

- Wind speed
- Humidity
- Sunrise time
- Current temperature
- Min and Max temperature
- City and Country name
- Weather icon
- Weather description

On click of view more button
the app display a modal which contains the hourly forecast of the
selected city.

- Date
- Time
- Temperature
- Real feel temperature
- UV index
- Weather icon
- Weather description

## Demo

Click here for the demo -> [Weather App](https://weather-app-1baad.firebaseapp.com)

I have also implemented

1. Login feature
2. NavGaurd - implemented for Home path
3. Interceptors
4. Local storage service - for saving user's data
5. Error handling service
6. PWA update service

## App sturcture

1. **Shared Modules** - contains is shared components, modules, pipes across the application

2. **Core Module** - contains all singleton services and modules that will be used across the app but only need to be imported once.

3. **Header Component** - it's the shared Header component.

4. **Login Component** - Holds the authentication template.

5. **Home Component** - it's the parent weather-app component which has app-city-card
   as the sub/child component.

   - `city-card` component - is reponsible for showing the city weather cards
     which is further divided into `temperature-details`, `weather-icon`, `weather-overview` components
   - `hourly-modal` component - is responsible for showing hourly weather forecast based on the selected city.

6. **Open-weather service** - contains

- getWeather() getWeather fetches the current weather report of the specified cities
  @param cityIds string[]
  @returns an Observable<OWAAPIData>

- getHourlyWeatherInfo() getHourlyWeatherInfo fetches the hourly forecast for a specific city based
  on the city's lat and long values.
  It excludes daily,minutely,current,alerts as they are not relevent for this project.
  @param cityDetails
  @returns an Observable<HourlyForecastDetails>

If you have any questions, you can pelase feel free to contact at `mail@ankitpant.com` or `ankit12.pant@gmail.com`.

## Can be improved

1. Add more unit testing to increase the coverage (it's 82% now).
2. Check reposiveness for multiple view ports.
3. Add more automation.
4. Error handling.

## Development server

Run `yarn start | npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io/latest/index.html)
or `yarn test:watch` to watch the changes in the unit testing while you code them.
This project will also generate the code coverage which can be seen by hosting/deploying
coverage folder.

## Running Automation

Run `yarn cy:run` to execute the end-to-end tests via [Cypress](https://www.cypress.io/).
Running this command should deploy angular project, json-server and also should
open the cypress window.

## Screenshots

# Login Page

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/login-page.png)

# Home Page

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/weather-5-cities.png)

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/weather-5-cities_daytime.png)

# Dark mode cards (show off)

Basically inverted the color of the city cards ;)

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/dark-mode-cards.png)

# Hourly forecast

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/hourly-forecast.png)

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/hourly-forecast-scrolled.png)

# PWA

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/pwa_installation.jpg)

# Unit testing coverage report

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/unit-testing.png)

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/coverage.png)

# e2e screenshot

![preview](https://raw.githubusercontent.com/ankypant/open-weather-app/main/src/assets/screenshots/e2e-test-cases.png)

# e2e test video

[e2e Video](https://www.dropbox.com/s/duvdb5uyt6nbtp2/weather-dashboard-e2e.mov?dl=0)

## Built With ❤️ and

- [Angular](https://angular.io)
- [Angular Material](https://material.angular.io)
- [Angular Flex layout](https://github.com/angular/flex-layout)
- [Jasmin](https://jasmine.github.io/)
- [Karma](https://karma-runner.github.io/latest/index.html)
- [Cypress](https://www.cypress.io/)
- [HTML](https://www.w3.org/html/)
- [SCSS](https://sass-lang.com/)
- [TypeScript](http://www.typescriptlang.org/)
- [AnimateCss](https://animate.style/)

## icons

- [Flaticons](https://www.flaticon.com/)
- [Flaticons_Copyright_Authors](https://www.flaticon.com/authors/pixel-perfect")

## Author

[Ankit Pant](https://ankitpant.com)
