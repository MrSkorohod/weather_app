import { createAction, props } from '@ngrx/store';
import { GeoCityData } from '../../models/cities.mode';

export const saveEnteredCity = createAction(
  '[Home Component] Save Current',
  props<{ value: GeoCityData }>()
);
export const reset = createAction('[Home Component] Reset');
