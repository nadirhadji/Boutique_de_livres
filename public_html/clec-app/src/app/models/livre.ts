export class Livre {
  id: number;
  cpr: number;
  aut: string;
  titre: string;
  prix: number;
  rab: number;
  des: string;
  nis: string;
  format: string;
  img: string;

  constructor(id: number, cpr: number, aut: string, titre: string, prix: number, rab: number,des: string,  nis: string, format: string, img: string) {
    this.id = id;
    this.cpr = cpr;
    this.aut = aut;
    this.titre = titre;
    this.prix = prix;
    this.rab = rab;
    this.des = des;
    this.nis = nis;
    this.format = format;
    this.img = img;
  }
}
