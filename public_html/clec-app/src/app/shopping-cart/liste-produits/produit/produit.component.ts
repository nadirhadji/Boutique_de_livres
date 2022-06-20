import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { PanierService } from 'src/app/services/panier.service';
import { Livre } from 'src/app/entite/Livre';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  @Input() livreItem: Livre = {} as Livre ;


  constructor(private msg: MessengerService, private panierS: PanierService) { 
 
  }

  ngOnInit(): void {
    
  }

  handleAddToCart() {
    this.msg.sendMsg(this.livreItem);
    this.panierS.addLivre(this.livreItem);
  }

}
