import * as fromFilter from './filter.actions';

const initialState: fromFilter.validFilters = 'all';

export function filterReducer(state = initialState, action: fromFilter.Actions): fromFilter.validFilters {
    switch (action.type) {
        case fromFilter.SET_FILTER:

            return action.filter;

        default:
            return state;
    }
}