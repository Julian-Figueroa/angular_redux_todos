import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import { DeleteAllTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.models';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  validFilters: fromFilter.validFilters[] = ['all', 'active', 'completed'];
  currentFilter: fromFilter.validFilters;

  active: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.countActive(state.todos);
    });
  }

  changeFilter(newFilter: fromFilter.validFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countActive(todos: Todo[]) {
    this.active = todos.filter(todo => !todo.completed).length;
  }

  deleteAll() {
    const action = new DeleteAllTodoAction();
    this.store.dispatch(action);
  }

}
