import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { WeatherIconComponent } from './weather-icon.component';

import { TestingModule } from '@utils/testing.module';
import { By } from '@angular/platform-browser';

describe('WeatherIconComponent', () => {
  let component: WeatherIconComponent;
  let fixture: ComponentFixture<WeatherIconComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [TestingModule],
        declarations: [WeatherIconComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show icon', () => {
    component.iconName = 'someIconName';
    component.iconSize = 4;

    fixture.detectChanges();

    const imgRef = fixture.debugElement.query(By.css('img'));
    expect(imgRef).toBeTruthy();
  });

  it('should not show icon if is null', () => {
    const imgRef = fixture.debugElement.query(By.css('img'));
    expect(imgRef).toBeFalsy();
  });
});
