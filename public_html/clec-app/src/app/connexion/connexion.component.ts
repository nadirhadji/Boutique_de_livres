import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionErreur: boolean = false;

  constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    let first:boolean = true;
    this.authService.isLogedInObs.subscribe( (isConnected) => {
        if (isConnected) {
        this.closeModal();
        } else if (!first) {
        this.connexionErreur = true;
        }
        first = false;
   })   
  }

  onSignOut() {
    this.authService.signOut();
  }

  closeModal() {
    this.dialog.closeAll();
  }

  onSubmitAdmin(username: string, passeword: string) {
    
    if (this.authService.signInAdmin(username, passeword)) {
      this.closeModal()
      this.router.navigate(['admin-panel']);
      this.connexionErreur = false;
    } else {
      this.connexionErreur = true;
    }
  }

  login(data:any) {
    switch(data.type) { 
      case "1": { 
         this.onSubmitAdmin(data.username, data.password);
         break; 
      } 
      case "2": { 
        this.authService.signInUser(data.username, data.password);
         break; 
      }
   } 
  }
}
