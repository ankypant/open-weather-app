import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable({
  providedIn: 'root',
})
export class PwaService {
  constructor(private swUpdate: SwUpdate) {}

  /**
   * init keeps a track of the PWA content
   * changes and then reload the app to fetch
   * the latest content of the app
   */
  public init(): void {
    console.log('PwaService: Listening for the app changes');
    this.swUpdate.available.subscribe(event => {
      console.log('swUpdate.event.available: ', event.available);
      window.location.reload();
    });
  }
}
