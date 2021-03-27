import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { UserDetails, AuthDetails } from './auth.interface';
import { StorageService } from '@core/services/storage/storage.service';

const USER_DETAILS = 'user_details';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public userDetails$: Observable<UserDetails>;
  public isLoggedIn$: Observable<boolean>;
  private authSubject: BehaviorSubject<UserDetails> = new BehaviorSubject<UserDetails>(
    null
  );

  constructor(
    private httpClient: HttpClient,
    private storageService: StorageService
  ) {
    this.init();
  }

  public login(authDetails: AuthDetails): Observable<UserDetails> {
    // CAN BE USED WITH THE REAL API END POINT
    // return this.httpClient
    // 	.post<UserDetails>('http://localhost:3000/auth', authDetails)
    // 	.pipe(
    // 		tap(userDetails => this.authSubject.next(userDetails)),
    // 	);

    // GETTING USER DETAILS FROM JSON SERVER
    return this.httpClient.get<UserDetails>('user-details').pipe(
      tap(userDetails => {
        this.storageService.set(USER_DETAILS, userDetails);
        this.authSubject.next(userDetails);
      })
    );
  }

  public logout(): void {
    this.authSubject.next(null);
    this.storageService.set(USER_DETAILS, null);
  }

  /** Checks the local storage and return a boolean */
  public isLoggedIn(): boolean {
    return !!this.storageService.get(USER_DETAILS);
  }

  private init(): void {
    this.userDetails$ = this.authSubject.asObservable();
    this.isLoggedIn$ = this.userDetails$.pipe(map(user => !!user));

    const userDetails: UserDetails = this.storageService.get(USER_DETAILS);

    if (userDetails) {
      console.log('usd', userDetails);
      this.authSubject.next(userDetails);
    }
  }
}
