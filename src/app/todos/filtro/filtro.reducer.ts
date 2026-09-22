import { createReducer, on } from '@ngrx/store';
import { setFiltro, FiltrosValidos } from './filtro.actions';

export const initialState: FiltrosValidos = 'todos';

export const filtroReducer = createReducer<FiltrosValidos>(
  initialState,

  on(setFiltro, (state, { filtro }) => filtro),
);
