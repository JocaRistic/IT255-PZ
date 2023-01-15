export class PorudzbinaModel {
    korisnikId?: number;
    telefonId?: number;
    adresaDostave: string;
    postanskiBroj: string;
    brojTelefona: string;
    id?: number;

    constructor(adresaDostave: string, postanskiBroj: string, brojTelefona: string, korisnikId?: number, telefonId?: number, id?: number){
        this.korisnikId = korisnikId;
        this.telefonId = telefonId;
        this.adresaDostave = adresaDostave;
        this.postanskiBroj = postanskiBroj;
        this.brojTelefona = brojTelefona;
        this.id = id;
    }
}
