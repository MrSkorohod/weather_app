import { createAction, props } from '@ngrx/store';
import { GeoCityData } from '@core/models';

export const savedCity = createAction(
  '[Cities API] Save Current',
  props<{ value: GeoCityData }>()
);
export const reset = createAction('[Home Component] Reset');

export const loadInitialCity = createAction('[General] Load initial city');
