import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { FiltrosValidos } from './todos/filtro/filtro.actions';
import { filtroReducer } from './todos/filtro/filtro.reducer';

export interface AppState {
  todos: Todo[];
  filtro: FiltrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
};
