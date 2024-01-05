import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cityStateReducer } from './reducers/city.reducer';
import { CityEffects } from './effects/city.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ saveCity: cityStateReducer }),
    EffectsModule.forRoot([CityEffects]),
  ],
})
export class GlobalStoreModule {}
