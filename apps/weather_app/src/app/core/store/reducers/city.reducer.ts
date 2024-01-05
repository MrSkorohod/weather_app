import { createReducer, on } from '@ngrx/store';
import { saveCity, resetCity } from '../actions/city.actions';

export const initialState = {};

export const cityStateReducer = createReducer(
  initialState,
  on(saveCity, (state, { value }) => value),
  on(resetCity, () => ({}))
);
