import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set Filter';

export type validFilters = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;

    constructor(public filter: validFilters) { }
}

export type Actions = SetFilterAction;