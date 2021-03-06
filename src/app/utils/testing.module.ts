import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { SwUpdate, ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  imports: [
    CommonModule,
    NoopAnimationsModule,
    RouterTestingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
    ServiceWorkerModule.register('', { enabled: false }),
    HttpClientTestingModule,
  ],
  providers: [SwUpdate],
  exports: [CoreModule, RouterTestingModule, SharedModule],
})
export class TestingModule {}
