import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared-material.module';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [AppComponent, BannerComponent],
  imports: [BrowserModule, BrowserAnimationsModule, SharedMaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
