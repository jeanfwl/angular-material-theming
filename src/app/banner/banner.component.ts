import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  @Input()
  message: string;

  @Input()
  type: 'success' | 'info' | 'warn' | 'none' = 'none';

  @HostBinding('class.app-banner')
  hostClass = true;

  @HostBinding('class')
  get hostTypeClass() {
    if (this.type !== 'none') {
      return `app-banner--${this.type}`;
    }
  }

  ngOnInit(): void {}
}
