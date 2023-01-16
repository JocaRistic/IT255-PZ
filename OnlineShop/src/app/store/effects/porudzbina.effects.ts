import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { PorudzbinaService } from "src/app/services/porudzbina.service";
import { addPorudzbina, addPorudzbinaSuccess, deletePorudzbina, deletePorudzbinaSuccess, getPorudzbine, getPorudzbineSuccess, updatePorudzbina, updatePorudzbinaSuccess } from "../actions/porudzbina.actions";

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

    addPorudzbina$ = createEffect(() => {
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
    });

    deletePorudzbina$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deletePorudzbina),
            mergeMap((action) => {
                return this._porudzbinaService.deletePorudzbina(action.id).pipe(
                    map((data) => {
                        return deletePorudzbinaSuccess({ id: data.id });
                    })
                );
            })
        );
    });

    updatePorudzbina$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updatePorudzbina),
            mergeMap((action) => {
                return this._porudzbinaService.updatePorudzbina(action.porudzbina).pipe(
                    map((data) => {
                        return updatePorudzbinaSuccess({ porudzbina: action.porudzbina });
                    })
                );
            })
        );
    });

}