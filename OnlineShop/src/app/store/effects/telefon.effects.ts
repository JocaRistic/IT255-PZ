import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, switchMap } from "rxjs/operators";
import { TelefonService } from "src/app/services/telefon.service";
import { addTelefon, addTelefonSuccess, deleteTelefon, deleteTelefonSuccess, getTelefoni, getTelefoniSuccess, updateTelefon, updateTelefonSuccess } from "../actions/telefon.actions";

@Injectable()
export class TelefonEffect {
    constructor(private actions$: Actions, private _telefonService: TelefonService) {
    }

    getTelefoni$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getTelefoni),
            mergeMap((action) => {
                return this._telefonService.getTelefoni().pipe(
                    map((telefoni) => {
                        return getTelefoniSuccess({ telefoni });
                    })
                );
            })
        );
    });

    addTelefon$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addTelefon),
            mergeMap((action) => {
                return this._telefonService.addTelefon(action.telefon).pipe(
                    map((data) => {
                        let telefon = { ...action.telefon, id: data.id};
                        return addTelefonSuccess({ telefon });
                    })
                );
            })
        );
    }
    );

    deleteTelefon$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteTelefon),
            mergeMap((action) => {
                return this._telefonService.deleteTelefon(action.id).pipe(
                    map((data) => {
                        return deleteTelefonSuccess({ id: data.id });
                    })
                )
            })
        )
    })

    updateTelefon$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateTelefon),
            switchMap((action) => {
                return this._telefonService.updateTelefon(action.telefon).pipe(
                    map((data) => {
                        return updateTelefonSuccess({ telefon: action.telefon });
                    })
                )
            })
        )
    })

}