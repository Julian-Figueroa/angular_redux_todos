import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.models';

const todo1 = new Todo('Learn Redux for Angular - NGRX');
const todo2 = new Todo('Learn React and GraphQL');
const todo3 = new Todo('Learn ML for JavaScript');

todo1.completed = true;

const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = initialState, action: fromTodo.Actions): Todo[] {
    switch (action.type) {
        case fromTodo.ADD_TODO:
            const todo = new Todo(action.text);

            return [...state, todo];

        case fromTodo.TOGGLE_TODO:

            return state.map(editTodo => {
                if (editTodo.id === action.id) {
                    return {
                        ...editTodo,
                        completed: !editTodo.completed
                    };
                } else {
                    return editTodo;
                }
            });

        case fromTodo.EDIT_TODO:

            return state.map(editTodo => {
                if (editTodo.id === action.id) {
                    return {
                        ...editTodo,
                        text: action.text
                    };
                } else {
                    return editTodo;
                }
            });

        case fromTodo.DELETE_TODO:

            return state.filter(editTodo => editTodo.id !== action.id);

        case fromTodo.DELETE_ALL_TODO:

            return state.filter(editTodo => !editTodo.completed);

        case fromTodo.TOGGLE_ALL_TODO:

            return state.map(editTodo => {
                return {
                    ...editTodo,
                    completed: action.completed
                };
            });

        default:
            return state;
    }
}