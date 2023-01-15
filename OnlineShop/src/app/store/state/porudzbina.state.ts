import { PorudzbinaModel } from "src/app/models/porudzbina.model";

export interface PorudzbinaState {
    porudzbine: PorudzbinaModel[];
}

export const initialPorudzbinaState: PorudzbinaState = {
    porudzbine: []
}