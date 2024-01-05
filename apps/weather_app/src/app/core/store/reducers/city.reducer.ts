import { createReducer, on } from '@ngrx/store';
import { savedCity, reset } from '../actions/city.actions';

export const initialState = {};

export const cityStateReducer = createReducer(
  initialState,
  on(savedCity, (state, { value }) => value),
  on(reset, () => ({}))
);
