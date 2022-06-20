import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MessengerService } from 'src/app/services/messenger.service';
import { ProduitComponent } from '../shopping-cart/liste-produits/produit/produit.component';
import { Livre } from '../models/livre';
import { Observable, Observer } from 'rxjs';
import { PanierService } from '../services/panier.service';



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  
  total:number = 0;

  panierItems: Livre[] = [
    
  
  ];

  

  constructor(private msg: MessengerService, private panierS: PanierService) { }
  

  ngOnInit(): void {
  
    this.panierItems = this.panierS.livres;
    

    function prixTotal(panier:any) {
      let total:number = 0;
      for (let index = 0; index < panier.length; index++) {
        total += panier[index].prix;
        
      }
      return total;
    };



  

    this.total = prixTotal(this.panierItems);
  }

  

}
