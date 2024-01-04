import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GlobalStoreModule } from './core/store/store.module';
import {
  loadInitialCity,
  loadInitialCitySuccess,
} from './core/store/actions/city.actions';
import { Store } from '@ngrx/store';
import { GeoCityData } from './core/models/cities.mode';

function initializeApp(store: Store<GeoCityData>) {
  return async () => {
    store.dispatch(loadInitialCity());
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalStoreModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [[new Inject(Store)]],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
