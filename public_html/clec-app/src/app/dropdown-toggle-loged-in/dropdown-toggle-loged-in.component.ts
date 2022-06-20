import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dropdown-toggle-loged-in',
  templateUrl: './dropdown-toggle-loged-in.component.html',
  styleUrls: ['./dropdown-toggle-loged-in.component.css']
})
export class DropdownToggleLogedInComponent implements OnInit {

  nom:string ="";
  prenom:string ="";

  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit(): void {
    this.nom = this.authService.client?.nom ?? this.authService.admin?.username;
    this.prenom = this.authService.client?.prenom ?? "";
  }

  logout() {
    this.authService.signOut();
    this.authService.isLogedInObs.next(false);
    this.router.navigate(['accueil']);
  }
}
