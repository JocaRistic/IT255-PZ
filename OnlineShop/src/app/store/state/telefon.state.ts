import { TelefonModel } from "src/app/models/telefon.model";

export interface TelefonState {
    telefoni: TelefonModel[];
}

export const initialTelefonState: TelefonState = {
    telefoni: []
}

