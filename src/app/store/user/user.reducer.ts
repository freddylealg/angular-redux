import { Action, createReducer, createSelector, on } from '@ngrx/store';
import { actionSaludar } from "./user.actions";


export interface UserState {
    texto : string
}

const initialState: UserState = {
    texto : 'Texto de prueba'
}


export const userReducer = createReducer(
    initialState,
    on(actionSaludar, (state, {texto}) => ({ ...state, texto: texto })),
);

