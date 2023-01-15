import { porudzbinaReducer } from "../reducers/porudzbina.reducer";
import { telefonReducer } from "../reducers/telefon.reducer";
import { PorudzbinaState } from "./porudzbina.state";
import { TelefonState } from "./telefon.state";

export interface AppState {
    telefon: TelefonState;
    porudzbina: PorudzbinaState;
}

export const appReducers = {
    telefon: telefonReducer,
    porudzbina: porudzbinaReducer
};