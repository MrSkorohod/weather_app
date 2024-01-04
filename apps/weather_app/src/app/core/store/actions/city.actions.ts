import { createAction, props } from '@ngrx/store';
import { GeoCityData } from '../../models/cities.mode';

export const saveEnteredCity = createAction(
  '[Home Component] Save Current',
  props<{ value: GeoCityData }>()
);
export const reset = createAction('[Home Component] Reset');

export const loadInitialCity = createAction('[General] Load initial city');

export const loadInitialCitySuccess = createAction(
  '[Cities API] City Loaded Success',
  props<{ value: GeoCityData }>()
);
