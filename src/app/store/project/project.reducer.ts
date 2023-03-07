import { createReducer, on } from '@ngrx/store';
import { getProjects } from './project.actions';


export interface projectState {
    projectList : string[]
}

export const initialState : projectState = {
    projectList : []
}

export const projectReducer = createReducer(
    initialState,
    on(getProjects, (state, {projects}) => ({ ...state, projectList: projects })),
);