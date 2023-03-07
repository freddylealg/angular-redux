import { ActionReducerMap } from "@ngrx/store";
import { projectReducer, projectState } from "./project/project.reducer";
import { userReducer, UserState } from "./user/user.reducer";


export interface AppState {
  userState: UserState;  
  projectState: projectState;
}

export const reducers: ActionReducerMap<AppState> = {    
    userState: userReducer,
    projectState: projectReducer 
};