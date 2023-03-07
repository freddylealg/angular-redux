import { createAction, props } from '@ngrx/store';


export const actionSaludar = createAction(
    "[USER] SALUDAR",
    props<{ texto: string }>()
);