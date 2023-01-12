export class KorisnikModel {
    ime: string;
    prezime: string;
    email: string;
    lozinka: string;
    role: string;
    id?: number;

    constructor(ime: string, prezime: string, email: string, lozinka: string, role: string, id?: number){
        this.ime = ime;
        this.prezime = prezime;
        this.email = email;
        this.lozinka = lozinka;
        this.role = role;
        this.id = id;
    }
}
