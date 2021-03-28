import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DarkModeService } from '@core/services/darkmode/darkmode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private darkModeService: DarkModeService
  ) {}

  public headerForm = this.formBuilder.group({
    darkMode: [false],
  });

  ngOnInit(): void {
    this.watchDarkModeChanges();
  }

  /**
   * It keeps the track of the form change
   * and emmits the new value to the dark mode
   * behaviour subject
   */
  private watchDarkModeChanges(): void {
    this.headerForm.valueChanges.subscribe(formData => {
      if (!formData) {
        return;
      }
      this.darkModeService.isDarkModeEnabled$.next(formData.darkMode);
    });
  }
}
