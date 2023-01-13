import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TelefonState } from "../state/telefon.state";

const getTelefonState = createFeatureSelector<TelefonState>('telefon');

//selector selektuje sve telefone
export const getTelefoniSelector = createSelector(
    getTelefonState,
    (state: TelefonState) => {
        return state.telefoni;
    }
)

//selector selektuje samo telefon ciji id se poklapa sa trazenim
export const getTelefonById = createSelector(
    getTelefonState,
    (state: TelefonState, id: number) => {
        return state.telefoni.find((telefon) => telefon.id === id);
    }
);