export class TelefonModel {
    brend: string;
    model: string;
    dijagonalaEkrana: string;
    ram: string;
    memorija: string;
    kamera: string;
    baterija: string;
    rezolucija: string;
    cena: number;
    slika: string;
    id?: number;

    constructor(brend: string, model: string, dijagonala: string, ram: string, memorija: string, kamera: string, baterija: string, rezolucija: string, cena: number, slika: string, id?: number){
        this.brend = brend;
        this.model = model;
        this.dijagonalaEkrana = dijagonala;
        this.ram = ram;
        this.memorija = memorija;
        this.kamera = kamera;
        this.baterija = baterija;
        this.rezolucija = rezolucija;
        this.cena = cena;
        this.slika = slika;
        this.id = id;
    }
}
