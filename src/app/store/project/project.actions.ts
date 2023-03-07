import { createAction, props } from '@ngrx/store';

export const getProjects = createAction(
    '[project] GET_PROJECTS',
    props<{ projects: string[] }>()
);