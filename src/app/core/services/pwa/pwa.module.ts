import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwaService } from './pwa.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (service: PwaService) => () => {
        return service.init();
      },
      deps: [PwaService],
      multi: true,
    },
  ],
})
export class PwaModule {}
