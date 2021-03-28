import { Component, Input, OnDestroy } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { DarkModeService } from '@core/services/darkmode/darkmode.service';
import { OpenWeatherAPIResponse } from '@shared/models/open-weather-api.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HourlyModalComponent } from '../hourly-modal/hourly-modal.component';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
})
export class CityCardComponent implements OnDestroy {
  @Input() cityWeatherReport: OpenWeatherAPIResponse;
  #destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public dialog: MatDialog,
    public darkModeService: DarkModeService,
    private mediaObserver: MediaObserver
  ) {}

  ngOnDestroy() {
    this.#destroy$.next();
    this.#destroy$.unsubscribe();
  }

  public showHourlyForecastModal(cityDetails: OpenWeatherAPIResponse): void {
    const dialogRef = this.dialog.open(HourlyModalComponent, {
      data: cityDetails,
      height: '60vh',
    });
    this.updateDialogDimension(dialogRef);
  }

  /**
   * It updates the width and height of the dialog
   * based on the screen size
   * @param dialogRef dialog modal's reference
   */
  private updateDialogDimension(dialogRef) {
    this.mediaObserver.media$
      .pipe(takeUntil(this.#destroy$))
      .subscribe((change: MediaChange) => {
        change.mqAlias === 'xs'
          ? dialogRef.updateSize('90%', '90%')
          : dialogRef.updateSize('90vw', '80vh');
      });
  }
}
