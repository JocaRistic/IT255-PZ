import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { TelefonService } from "src/app/services/telefon.service";
import { getTelefoni, getTelefoniSuccess } from "../actions/telefon.actions";

@Injectable()
export class TelefonEffect {
    constructor(private actions$: Actions, private _telefonService: TelefonService){
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


}