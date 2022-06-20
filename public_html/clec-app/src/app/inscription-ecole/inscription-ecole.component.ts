import { Component, OnInit } from '@angular/core';
import { BdService } from '../services/bd.service';

@Component({
  selector: 'app-inscription-ecole',
  templateUrl: './inscription-ecole.component.html',
  styleUrls: ['./inscription-ecole.component.css']
})
export class InscriptionEcoleComponent implements OnInit {

  constructor(private bdService:BdService) { }

  ngOnInit(): void {
  }

  register(data:any) {
    const ecole = { 
      nom: data.name,
      code:data.code,
      adresse:data.adresse +" "+data.ville+ " "+data.province+ " "+data.postal ,
      email:data.email,
      telephone:data.telephone
    };
    this.bdService.inscriptionEcole(ecole);
  }
}

