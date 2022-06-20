import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  adminName:string = "Admin";
  isSidebarOpen = true;
  viewName:string = "annonce";

  constructor(authService:AuthService) {
      this.adminName = authService.admin.username;
      this.adminName = this.adminName.toUpperCase();
   }

  updateView(view:string) {
      this.viewName = "";
  }

  toggleSidebar() {
    if ( this.isSidebarOpen )
        this.isSidebarOpen = false;
    else
        this.isSidebarOpen = true;
  }

  openAnnonce() {
      this.viewName = "annonce";
  }

  openRabais() {
      this.viewName = "rabais";
  }

  openLivres(){
      this.viewName = "livre";
  }

  openEcole(){
      this.viewName = "ecole";
  }

}
