import { telefonReducer } from "../reducers/telefon.reducer";
import { TelefonState } from "./telefon.state";

export interface AppState {
    telefon: TelefonState;
}

export const appReducers = {
    telefon: telefonReducer
};