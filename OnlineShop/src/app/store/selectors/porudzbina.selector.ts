import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PorudzbinaState } from "../state/porudzbina.state";

const getPorudzbinaState = createFeatureSelector<PorudzbinaState>('porudzbina');

//selektor selektuje sve porudzbine
export const getPorudzbineSelector = createSelector(
    getPorudzbinaState,
    (state: PorudzbinaState) => {
        return state.porudzbine;
    }
)

//selector selektuje samo porudzbinu ciji id se poklapa sa trazenim
export const getPorudzbinaByIdSelector = createSelector(
    getPorudzbinaState,
    (state: PorudzbinaState, id: number) => {
        return state.porudzbine.find((porudzbina) => porudzbina.id == id);
    }
);