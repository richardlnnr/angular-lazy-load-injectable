import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {
  // constructor(private readonly injector: Injector) {
  //   const el = createCustomElement(AppComponent, { injector: this.injector });
  //   customElements.define('element-injectable', el);
  // }

  // ngDoBootstrap() {}
}
