import { createReducer, on } from "@ngrx/store";
import { getTelefoniSuccess } from "../actions/telefon.actions";
import { initialTelefonState } from "../state/telefon.state";

const _telefonReducer = createReducer(
    initialTelefonState,
    on(getTelefoniSuccess, (state, action) => {
        return {
            ...state,
            telefoni: action.telefoni,
        }
    })
)

export function telefonReducer(state: any, action: any){
    return _telefonReducer(state, action);
}