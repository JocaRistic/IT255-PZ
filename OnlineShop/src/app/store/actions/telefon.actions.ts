import { createAction, props } from "@ngrx/store";
import { TelefonModel } from "src/app/models/telefon.model";

export const GET_TELEFONI = '[Telefon] Get Telefoni';
export const GET_TELEFONI_SUCCESS = '[Telefon] Get Telefoni Success';
export const ADD_TELEFON = '[Telefon] Add Telefon';
export const ADD_TELEFON_SUCCESS = '[Telefon] Add Telefon Success'

export const getTelefoni = createAction(GET_TELEFONI);
export const getTelefoniSuccess = createAction(
  GET_TELEFONI_SUCCESS,
  props<{ telefoni: TelefonModel[] }>()
);

export const addTelefon = createAction(ADD_TELEFON, props<{ telefon: TelefonModel}>());
export const addTelefonSuccess = createAction(ADD_TELEFON_SUCCESS, props<{telefon: TelefonModel}>());

