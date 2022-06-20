import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Livre } from 'src/app/models/livre';
import { BdService } from 'src/app/services/bd.service';
import { NgForm } from '@angular/forms';
import { PanierService } from '../services/panier.service';
import { MatPaginator, MatPaginatorIntl} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private bdService: BdService, private panierService: PanierService) {
    this.livresListe = bdService.getLivres();
  }

  ngAfterViewInit() {
    if (this.paginator != undefined)
      this.dataSource.paginator = this.paginator;
  }

  livresListe: Livre[] = []
  livresTrouver : Livre[] = []
  displayedColumns: string[] = ['cpr','aut','titre','prix','rab','actions'];
  dataSource = new MatTableDataSource<Livre>([]);
  pasDeResultat: boolean = false;

  afficheMoi:boolean = false;

  ngOnInit(): void {
  }

  afficher(){
    this.afficheMoi = !this.afficheMoi;
  }

  chercherLivre(form: NgForm): void {
    this.livresTrouver = [];

    if ( this.pasDeResultat == false && this.livresTrouver.length == 0)
      this.pasDeResultat = true;
    
    if ( form.value.type === "categorie" ) {
      for (let i = 0; i < this.livresListe.length; i++) {
        if ( this.livresListe[i].nis == form.value.search ) {
          this.livresTrouver.push(this.livresListe[i]);
        }
      }
    } else if ( form.value.type === "titre" ) {
      for (let j = 0; j < this.livresListe.length; j++) {
        if ( this.livresListe[j].titre == form.value.search ) {
          this.livresTrouver.push(this.livresListe[j]);
        }
      }
    }
    if ( this.livresTrouver.length > 0) 
      this.pasDeResultat = false;
      
    this.dataSource = new MatTableDataSource<Livre>(this.livresTrouver);
  }

  ajouterAuPanier(element:Livre) {
      this.panierService.addLivre(element);
  }
  
}
