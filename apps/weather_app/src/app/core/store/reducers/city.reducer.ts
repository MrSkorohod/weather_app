import { createReducer, on } from '@ngrx/store';
import {
  saveEnteredCity,
  reset,
  loadInitialCitySuccess,
} from '../actions/city.actions';

export const initialState = {};

export const cityStateReducer = createReducer(
  initialState,
  on(saveEnteredCity, (state, { value }) => value),
  on(reset, () => ({})),
  on(loadInitialCitySuccess, (state, { value }) => value)
);
