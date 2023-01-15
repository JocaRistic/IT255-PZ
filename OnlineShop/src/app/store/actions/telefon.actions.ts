import { createAction, props } from "@ngrx/store";
import { TelefonModel } from "src/app/models/telefon.model";

export const GET_TELEFONI = '[Telefon] Get Telefoni';
export const GET_TELEFONI_SUCCESS = '[Telefon] Get Telefoni Success';
export const ADD_TELEFON = '[Telefon] Add Telefon';
export const ADD_TELEFON_SUCCESS = '[Telefon] Add Telefon Success'
export const DELETE_TELEFON = '[Telefon] Delete Telefon';
export const DELETE_TELEFON_SUCCESS = '[Telefon] Delete Telefon Success';
export const UPDATE_TELEFON = '[Telefon] Update Telefon';
export const UPDATE_TELEFON_SUCCESS = '[Telefon] Update Telefon Success';

export const getTelefoni = createAction(GET_TELEFONI);
export const getTelefoniSuccess = createAction(
  GET_TELEFONI_SUCCESS,
  props<{ telefoni: TelefonModel[] }>()
);

export const addTelefon = createAction(ADD_TELEFON, props<{ telefon: TelefonModel }>());
export const addTelefonSuccess = createAction(ADD_TELEFON_SUCCESS, props<{ telefon: TelefonModel }>());

export const deleteTelefon = createAction(DELETE_TELEFON, props<{ id: number }>());
export const deleteTelefonSuccess = createAction(DELETE_TELEFON_SUCCESS, props<{ id: any }>());

export const updateTelefon = createAction(UPDATE_TELEFON, props<{ telefon: TelefonModel }>());
export const updateTelefonSuccess = createAction(UPDATE_TELEFON_SUCCESS, props<{ telefon: TelefonModel }>());