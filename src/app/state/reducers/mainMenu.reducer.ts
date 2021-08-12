import { createReducer, on } from "@ngrx/store";
import {
    openMainMenu,
    closeMainMenu
} from "../actions/mainMenu.actions";

const initialState = false;

const __mainMenuReducer = createReducer(
    initialState,
    on(openMainMenu,(state) => state = true),
    on(closeMainMenu, (state) => state = false)
);

export function mainMenuReducer(state:any, action:any){
    return __mainMenuReducer(state, action)
}