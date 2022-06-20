import { Injectable } from '@angular/core';
import { Livre } from '../models/livre';
import { BdService } from './bd.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  livres: Livre[] = []
  private nombreLivre: number = 0;
  private prixTotal:number = 0;
  
  constructor(private bdService:BdService) { }

  addLivre(livre: Livre) {
    this.livres.push(livre);
    this.prixTotal =+ livre.prix;
    this.bdService.togglePanier(livre.cpr);
    this.incrementerNombreDeLivre();
  }

  incrementerNombreDeLivre() {
    this.nombreLivre++;
  }

  obtenirNombreLivres() {
    return this.nombreLivre;
  }

}
