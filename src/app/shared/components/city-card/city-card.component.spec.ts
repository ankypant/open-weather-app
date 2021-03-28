import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CityCardComponent } from './city-card.component';

import { TestingModule } from '@utils/testing.module';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { citiesDetails } from '@shared/mocks/cities-weather.mock';
import { of } from 'rxjs';

const openWeatherAPIResponse: OpenWeatherAPIResponse = citiesDetails.list[0];

const matDialogMock = {
  open: (component: any, args: any): any => {
    return { afterClosed: () => of(false) };
  },
};

const dialogRefMock = {
  updateSize: (width: string, height: string): any => {
    return;
  },
};

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;
  let matDialog: MatDialog;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [CityCardComponent],
        providers: [
          { provide: MatDialog, useValue: matDialogMock },
          { provide: MatDialogRef, useValue: dialogRefMock },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    matDialog = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open mat dialoge', () => {
    const spy = spyOn(matDialog, 'open').and.callThrough();
    component.showHourlyForecastModal(openWeatherAPIResponse);
    expect(spy).toHaveBeenCalled();
  });
});
