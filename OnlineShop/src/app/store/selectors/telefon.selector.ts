import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TelefonState } from "../state/telefon.state";

const getTelefonState = createFeatureSelector<TelefonState>('telefon');

export const getTelefoniSelector = createSelector(
    getTelefonState,
    (state: TelefonState) => {
        return state.telefoni;
    }
)