import { createReducer, on } from "@ngrx/store";
import { addPorudzbinaSuccess, getPorudzbineSuccess } from "../actions/porudzbina.actions";
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
    })
)

export function porudzbinaReducer(state: any, action: any){
    return _porudzbinaReducer(state, action);
}