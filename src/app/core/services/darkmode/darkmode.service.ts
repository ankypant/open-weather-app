import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  /**
   * Subject the keep the track of the Dark mode toggle value
   * with initial value as false
   */
  public isDarkModeEnabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
}
