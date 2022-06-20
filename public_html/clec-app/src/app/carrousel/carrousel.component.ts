import { Component, OnInit } from '@angular/core'; 
import { CarousselElement } from '../entite/ItemCarrousel';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  elements:Array<CarousselElement> = new Array<CarousselElement>();
  photoLink:string = '../../assets/images/images-carrousel/';
    
  constructor() { 
    this.elements.push({nom:"Categorie",description:"Consulter notre bibliothéque",lien: this.photoLink +'photo1.png'});
    this.elements.push({nom:"Rabais",description:"Consulter nos petit prix",lien:this.photoLink +'photo2.png'});
    this.elements.push({nom:"Partenariat",description:"Aider votre école",lien:this.photoLink +'photo3.png'});
  }

  ngOnInit(): void {
  }

}
