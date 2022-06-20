import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  totalPanier:number = 0;
  //Icones 
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;

  constructor(private panierS: PanierService, private authService:AuthService) { }

  updatePanier():number {
    return this.panierS.obtenirNombreLivres();
  };

  isLogedIn():boolean {
      return (this.authService.client !== undefined) || (this.authService.admin !== undefined);      
  }

}
