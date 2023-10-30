import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { cityStateReducer } from './reducers/city.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ saveCity: cityStateReducer })],
})
export class GlobalStoreModule {}
