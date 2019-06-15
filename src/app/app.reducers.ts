import { Todo } from './todo/model/todo.models';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

import * as fromFilterActions from './filter/filter.actions';
export interface AppState {
    todos: Todo[];
    filter: fromFilterActions.validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
};