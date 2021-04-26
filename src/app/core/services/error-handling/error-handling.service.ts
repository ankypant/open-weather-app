import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ErrorhandlingService {
  constructor(private snackBar: MatSnackBar) {}
  public showError<T>(text: string, error: T): Observable<T> {
    // show the error message to the user
    this.showSnackBar(text);

    // log errors to console
    console.error(text, error);

    // throw error
    return throwError(error);
  }

  private showSnackBar(text: string, duration: number = 10000) {
    this.snackBar.open(text, 'close', {
      duration,
      horizontalPosition: 'right',
    });
  }
}
