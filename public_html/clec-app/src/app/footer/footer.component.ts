import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionClientComponent } from '../inscription-client/inscription-client.component';
import { InscriptionEcoleComponent } from '../inscription-ecole/inscription-ecole.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger!: MatMenuTrigger;

  insideClick: boolean;
  isMenuOpen: boolean;
  
  constructor(public dialog: MatDialog) {
    this.isMenuOpen = false; 
    this.insideClick = false;
   }

  ngOnInit(): void {
    
  }

  openLoginComponent() {
    this.dialog.open(ConnexionComponent);
  }

  openInscriptionClientComponent() {
    this.dialog.open(InscriptionClientComponent);
  }

  openInscriptionEcoleComponent() {
    this.dialog.open(InscriptionEcoleComponent);
  }

  vldMsg() {
    
    alert("Vous êtes abonné");
    
  }
}
