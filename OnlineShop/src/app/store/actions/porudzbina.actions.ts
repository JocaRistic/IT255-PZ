import { createAction, props } from "@ngrx/store";
import { PorudzbinaModel } from "src/app/models/porudzbina.model";

export const GET_PORUDZBINE = '[Porudzbina] Get Porudzbine';
export const GET_PORUDZBINE_SUCCESS = '[Porudzbina] Get Porudzbine Success';
export const ADD_PORUDZBINA = '[Porudzbina] Add Porudzbina';
export const ADD_PORUDZBINA_SUCCESS = '[Porudzbina] Add Porudzbina Success';
export const DELETE_PORUDZBINA = '[Porudzbina] Delete Porudzbina';
export const DELETE_PORUDZBINA_SUCCESS = '[Porudzbina] Delete Porudzbina Success';
export const UPDATE_PORUDZBINA = '[Porudzbina] Update Porudzbina';
export const UPDATE_PORUDZBINA_SUCCESS = '[Porudzbina] Update Porudzbina Success';

export const getPorudzbine = createAction(GET_PORUDZBINE);
export const getPorudzbineSuccess = createAction(
    GET_PORUDZBINE_SUCCESS,
    props<{ porudzbine: PorudzbinaModel[] }>()
);

export const addPorudzbina = createAction(
    ADD_PORUDZBINA,
    props<{ porudzbina: PorudzbinaModel }>()
);
export const addPorudzbinaSuccess = createAction(
    ADD_PORUDZBINA_SUCCESS,
    props<{ porudzbina: PorudzbinaModel }>()
);

export const deletePorudzbina = createAction(
    DELETE_PORUDZBINA,
    props<{ id: number }>()
);
export const deletePorudzbinaSuccess = createAction(
    DELETE_PORUDZBINA_SUCCESS,
    props<{ id: any }>()
);

export const updatePorudzbina = createAction(
    UPDATE_PORUDZBINA,
    props<{ porudzbina: PorudzbinaModel }>()
);
export const updatePorudzbinaSuccess = createAction(
    UPDATE_PORUDZBINA_SUCCESS,
    props<{ porudzbina: PorudzbinaModel }>()
);