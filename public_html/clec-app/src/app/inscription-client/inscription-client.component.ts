import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConnexionComponent } from '../connexion/connexion.component';
import { AuthService } from '../services/auth.service';
import { BdService } from '../services/bd.service';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})
export class InscriptionClientComponent implements OnInit {

  constructor(private bdService:BdService, 
    private authService:AuthService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  register(data:any) {

    let pwd = data.pwd;
    let pwd2 = data.pwd2;

    const user = { 
      nom: data.lastname,
      prenom:data.firstname,
      email:data.email,
      telephone:data.telephone,
      motDePasse:data.pwd2
    };
      
    if ( this.checkPasswords(pwd,pwd2) ) {
        this.bdService.inscription(user);
        this.authService.resetUsagers();
        this.dialog.closeAll();
    }
  }

  checkPasswords(pwd:string, pwd2:string):boolean {
     return pwd === pwd2;
  }

}
