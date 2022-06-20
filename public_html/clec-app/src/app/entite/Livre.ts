export interface Livre {
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
    finalPrice?: number;
}
