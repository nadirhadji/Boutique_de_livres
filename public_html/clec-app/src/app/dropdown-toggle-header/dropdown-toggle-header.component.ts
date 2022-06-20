import { Component, OnInit, ViewChild, HostListener} from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionClientComponent } from '../inscription-client/inscription-client.component';
import { InscriptionEcoleComponent } from '../inscription-ecole/inscription-ecole.component';

@Component({
  selector: 'app-dropdown-toggle-header',
  templateUrl: './dropdown-toggle-header.component.html',
  styleUrls: ['./dropdown-toggle-header.component.css']
})

export class DropdownToggleHeaderComponent implements OnInit {

  @ViewChild('clickHoverMenuTrigger') clickHoverMenuTrigger!: MatMenuTrigger;

  insideClick: boolean;
  isMenuOpen: boolean;
  
  constructor(public dialog: MatDialog) {
    this.isMenuOpen = false; 
    this.insideClick = false;
   }

  ngOnInit(): void {
    
  }

  @HostListener("click")
  openMenu() {
    if (this.isMenuOpen == false) {
      this.clickHoverMenuTrigger.openMenu();
    }
    this.insideClick = true;
  }

  @HostListener("document:click")
  closeMenu() {
    if ( this.insideClick == false) {
      this.clickHoverMenuTrigger.closeMenu();
    }
    this.insideClick = false; 
  }

  openLoginComponent() {
    this.dialog.open(ConnexionComponent);
  }

  openInscriptionClientComponent() {
    this.dialog.open(InscriptionClientComponent);
  }

}
