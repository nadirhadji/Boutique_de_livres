import { Component, OnInit } from '@angular/core';
import { BdService } from '../services/bd.service';
import { ActivatedRoute } from '@angular/router';
import { MessengerService } from '../services/messenger.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css']
})
export class PageProduitComponent implements OnInit {

  paramQuery: any = "";
  livre: any;

  constructor( private activatedRoute: ActivatedRoute, public bdService: BdService, private msg: MessengerService, private panierS: PanierService ) { 
    this.activatedRoute.params.subscribe(dataI => {
      this.paramQuery = dataI['id'];
    });
    console.log(this.paramQuery);
  }

  ngOnInit(): void {
    console.log("im here");
    this.livre = this.bdService.getLivre(this.paramQuery);
    this.chargerLivre()
  }

  chargerLivre() {
    this.bdService.getLivres().forEach( function(liv){
      console.log(liv.cpr);
    });
  }

  handleAddToCart() {
    this.msg.sendMsg(this.livre);
    this.panierS.addLivre(this.livre);
    this.panierS.incrementerNombreDeLivre();
    this.bdService.getLivres().forEach( function(liv){
      console.log(liv.cpr);
    });
  }

}
