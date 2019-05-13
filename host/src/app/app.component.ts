import { Component, OnInit } from '@angular/core';
import { CeloaderService } from './celoader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'host';

  constructor(private celoaderService: CeloaderService) {}

  add(name: string): void {
    const customElement = document.createElement(name);
    const content = document.getElementById('content');
    content.appendChild(customElement);
    console.log('added');

  }

  ngOnInit() {
    this.celoaderService.load();
    console.log('loaded');
    this.add('my-web-component');
  }

  addMore() {
    console.log('click')
    this.add('my-web-component');
  }
}
