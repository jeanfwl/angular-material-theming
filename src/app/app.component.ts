import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    let themeName: string;
    if ((themeName = sessionStorage.getItem('theme'))) {
      this.renderer.addClass(this.document.body, `${themeName}-theme`);
    } else {
      this.renderer.addClass(this.document.body, 'light-theme');
    }
  }

  setTheme({ source }: MatSelectChange) {
    sessionStorage.setItem('theme', source.value);
    if (source.value === 'dark') {
      this.renderer.addClass(this.document.body, 'dark-theme');
      this.renderer.removeClass(this.document.body, 'light-theme');
    } else {
      this.renderer.addClass(this.document.body, 'light-theme');
      this.renderer.removeClass(this.document.body, 'dark-theme');
    }
  }
}
