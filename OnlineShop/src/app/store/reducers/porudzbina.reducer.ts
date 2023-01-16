import { createReducer, on } from "@ngrx/store";
import { addPorudzbinaSuccess, deletePorudzbinaSuccess, getPorudzbineSuccess, updatePorudzbinaSuccess } from "../actions/porudzbina.actions";
import { initialPorudzbinaState } from "../state/porudzbina.state";

const _porudzbinaReducer = createReducer(
    initialPorudzbinaState,
    on(getPorudzbineSuccess, (state, action) => {
        return {
            ...state,
            porudzbine: action.porudzbine,
        }
    }),
    on(addPorudzbinaSuccess, (state, action) => {
        let porudzbina = { ...action.porudzbina };
        return {
            ...state,
            porudzbine: [...state.porudzbine, porudzbina],
        };
    }),
    on(deletePorudzbinaSuccess, (state, action) => {
        const updatedPorudzbine = state.porudzbine.filter((porudzbina) => {
            return porudzbina.id !== action.id;
        });

        return {
            ...state,
            porudzbine: updatedPorudzbine,
        };
    }),
    on(updatePorudzbinaSuccess, (state, action) => {
        const updatedPorudzbine = state.porudzbine.map((porudzbina) => {
            return action.porudzbina.id === porudzbina.id ? action.porudzbina : porudzbina;
        });

        return {
            ...state,
            porudzbine: updatedPorudzbine,
        }
    })
)

export function porudzbinaReducer(state: any, action: any){
    return _porudzbinaReducer(state, action);
}