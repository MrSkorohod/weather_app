import { createAction, props } from '@ngrx/store';
import { GeoCityData } from '@core/models';

export const saveCity = createAction(
  '[Cities API] Save City',
  props<{ value: GeoCityData }>()
);
export const resetCity = createAction('[City] Reset');

export const loadInitialCity = createAction('[Cities API] Load initial city');
