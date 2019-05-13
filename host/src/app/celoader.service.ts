import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CeloaderService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'assets/custom-element-demo.bundle.js';
    document.body.appendChild(script);
    this.loaded = true;
  }
}
