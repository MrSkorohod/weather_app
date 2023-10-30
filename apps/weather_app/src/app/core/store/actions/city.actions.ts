import { createAction, props } from '@ngrx/store';

export const saveEnteredCity = createAction(
  '[Home Component] Save Current',
  props<{ value: string }>()
);
export const reset = createAction('[Home Component] Reset');
