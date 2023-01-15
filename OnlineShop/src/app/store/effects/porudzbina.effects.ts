import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { PorudzbinaService } from "src/app/services/porudzbina.service";
import { addPorudzbina, addPorudzbinaSuccess, getPorudzbine, getPorudzbineSuccess } from "../actions/porudzbina.actions";

@Injectable()
export class PorudzbinaEffect {

    constructor(private actions$: Actions, private _porudzbinaService: PorudzbinaService) {
    }

    getPorudzbine$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getPorudzbine),
            mergeMap((action) => {
                return this._porudzbinaService.getPorudzbine().pipe(
                    map((porudzbine) => {
                        return getPorudzbineSuccess({ porudzbine });
                    })
                );
            })
        );
    });

    addTelefon$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addPorudzbina),
            mergeMap((action) => {
                return this._porudzbinaService.addPorudzbina(action.porudzbina).pipe(
                    map((data) => {
                        let porudzbina = { ...action.porudzbina, id: data.id};
                        return addPorudzbinaSuccess({ porudzbina });
                    })
                );
            })
        );
    }
    );

}