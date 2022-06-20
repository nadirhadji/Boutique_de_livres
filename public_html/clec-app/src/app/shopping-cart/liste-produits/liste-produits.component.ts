import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';
import { Livre } from 'src/app/entite/Livre';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  livresListe: Livre[] = []
  constructor(private bdService: BdService) { 
  }

  ngOnInit(): void {
    this.livresListe = this.bdService.getLivres();
    console.log(this.livresListe)
  }

}
