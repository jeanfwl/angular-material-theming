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

  readonly themeAnchor = this.document.getElementById('app-theme');
  ngOnInit(): void {
    let themeName: string;
    if ((themeName = sessionStorage.getItem('theme'))) {
      this.renderer.setAttribute(
        this.themeAnchor,
        'href',
        `/${themeName}-theme.css`
      );
    } else {
      this.renderer.setAttribute(this.themeAnchor, 'href', '/light-theme.css');
    }
  }

  setTheme({ source }: MatSelectChange) {
    sessionStorage.setItem('theme', source.value);
    if (source.value === 'dark') {
      this.renderer.setAttribute(this.themeAnchor, 'href', '/dark-theme.css');
    } else {
      this.renderer.setAttribute(this.themeAnchor, 'href', '/light-theme.css');
    }
  }
}
