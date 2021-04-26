import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { ErrorhandlingService } from '@core/services/error-handling/error-handling.service';
import { UserDetails, AuthDetails } from '@core/services/auth/auth.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  // # as per new ts version 3.7+ makes the field private
  #destroy$ = new Subject<void>();

  constructor(
    public authService: AuthService,
    private errorhandlingService: ErrorhandlingService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fillDummyFormValues();
  }

  ngOnDestroy(): void {
    this.#destroy$.next(null);
    this.#destroy$.unsubscribe();
  }

  /**
   * Calls login in AuthService if the form is valid
   */
  public login(): void {
    // check if the form is valid (if disabled attr is removed by inspect element)
    if (this.loginForm.invalid) {
      this.errorhandlingService.showError('Please enter all the details', null);
      return;
    }
    const authDetails: AuthDetails = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value,
    };
    // commenting out the auth service
    // this.authService
    //   .login(authDetails)
    //   .pipe(takeUntil(this.#destroy$))
    //   .subscribe(
    //     (userDetails: UserDetails) => {
    //       this.router.navigateByUrl('home');
    //     },
    //     error => {
    //       this.errorhandlingService.showError(
    //         'Some error occured while login in',
    //         error
    //       );
    //     }
    //   );

    this.router.navigateByUrl('home');
  }

  /**
   *  Patches the login form with dummy data
   */
  private fillDummyFormValues(): void {
    this.loginForm.patchValue({
      username: 'ankitpant',
      password: 'dummyPassword#1',
    });
  }
}
