import { Action, createReducer, on } from '@ngrx/store';
import {
  borrar,
  crear,
  editar,
  limpiar,
  toggle,
  toggleAll,
} from './todo.actions';
import { Todo } from '../models/todo.model';

export const initialState: Todo[] = [new Todo('Salvar al mundo')];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(toggleAll, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado: completado,
      };
    }),
  ),

  on(limpiar, (state) => state.filter((todo) => !todo.completado)),

  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  }),
);

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action);
}
