import { createReducer, on } from "@ngrx/store";
import { addTelefonSuccess, deleteTelefonSuccess, getTelefoniSuccess, updateTelefonSuccess } from "../actions/telefon.actions";
import { initialTelefonState } from "../state/telefon.state";

const _telefonReducer = createReducer(
    initialTelefonState,
    on(getTelefoniSuccess, (state, action) => {
        return {
            ...state,
            telefoni: action.telefoni,
        }
    }),
    on(addTelefonSuccess, (state, action) => {
        let telefon = { ...action.telefon };
        return {
            ...state,
            telefoni: [...state.telefoni, telefon],
        };
    }),
    on(deleteTelefonSuccess, (state, action) => {
        const updatedTelefoni = state.telefoni.filter((telefon) => {
            return telefon.id !== action.id;
        });

        return {
            ...state,
            telefoni: updatedTelefoni,
        };
    }),
    on(updateTelefonSuccess, (state, action) => {
        const updatedTelefoni = state.telefoni.map((telefon) => {
            return action.telefon.id === telefon.id ? action.telefon : telefon;
        });

        return {
            ...state,
            telefoni: updatedTelefoni,
        }
    })
)

export function telefonReducer(state: any, action: any){
    return _telefonReducer(state, action);
}