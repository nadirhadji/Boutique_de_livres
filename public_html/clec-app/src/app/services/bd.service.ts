import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { Livre } from '../entite/Livre';
import { Client } from '../entite/Client';
import { Admin } from '../entite/Admin';


interface Data {
  file: String;
  data: String;
}

@Injectable({
  providedIn: 'root'
})
export class BdService {

  lstlivres:Array<Livre> = []
  lstPanier:number[] = []
  lstData:any[] = []
  lstSearch:any[]= []
  ImageBaseData:string | ArrayBuffer = "";

  constructor(private http: HttpClient) {
      this.updateLivres();
  }

  async getData(filename:string){
      const obs = this.http.get(environment.baseUrl+"/getjson?f=assets/data/"+filename);
      const res = await firstValueFrom(obs);
      return res;
  }

  async getDataUsers(filename:string){
    const obs = this.http.get<Client>(environment.baseUrl+"/getjson?f=assets/data/"+filename);
    const res = await lastValueFrom(obs);
    return res;
}

  async postData(filename:string, data:any[]) {
      let json = JSON.stringify(data);
      console.log(filename);
      const obs = this.http.post(environment.baseUrl+"/postjson?f=assets/data/"+filename,json);
      const res = await lastValueFrom(obs);
  }

<<<<<<< HEAD
=======
  async ajoutLivre(data:any) {
    const obs = this.http.post(environment.baseUrl+"/ajoutLivre",data);
    const res = await lastValueFrom(obs);
    console.log(res);
  }

  async deleteBook(data:any) {
    const obs = this.http.post(environment.baseUrl+"/deleteBook",data);
    const res = await lastValueFrom(obs);
    console.log(res);
  }
  async inscriptionEcole(data:any) {
    const obs = this.http.post(environment.baseUrl+"/inscriptionEcole",data);
    const res = await lastValueFrom(obs);
    console.log(res);
  }

>>>>>>> 7f7315d2f8f9c9008b1db92d3d7adfd5bca7bfad
  async inscription(data:any) {
    const obs = this.http.post(environment.baseUrl+"/inscription",data);
    const res = await lastValueFrom(obs);
    console.log(res);
  }

  updateLivres() {
    let lstbooks:Array<Livre> = [];
    this.getData("livres.json")
        .then ( (data: any ) => {
              for (let i = 0 ; i < data.length ; i++) {
                lstbooks.push(data[i]);
              }
            this.lstlivres = lstbooks;
        });
  }

  getLivre(code:number) {
    this.updateLivres();
    this.lstlivres.forEach(liv => {
        console.log(liv.aut);
    });
  }

  getLivres():Array<Livre> {
     this.updateLivres();
     return this.lstlivres;
  }

  getPanier() {
      const listeLivrePanier:Array<Livre> = [];
      this.lstPanier.forEach(
        code => {
          let livre = this.lstlivres.find( element => element.cpr == code);
          if (livre != undefined)
            listeLivrePanier.push(livre);
        }
      );
      return listeLivrePanier;
  }

  togglePanier(cpr:number) {
    let indice = this.lstPanier.indexOf(cpr);
    if ( indice != -1 )
        this.lstPanier.push(cpr);
    else
        this.lstPanier.splice(indice,1);
  }

  addLivre(livre:Livre) {
    let livreExistant = this.lstlivres.find( element => element.cpr == livre.cpr)
    if ( livreExistant != undefined) {
      this.lstlivres.push(livre);
      this.postData("livres.json",this.lstlivres);
    }
  }

  delLivre(cpr:number) {
    let livreExistant = this.lstlivres.find( element => element.cpr == cpr);
    if (livreExistant != undefined ) {
        let indice = this.lstlivres.indexOf(livreExistant);
        this.lstlivres.splice(indice,1);
        this.postData("livres.json",this.lstlivres);
    }
  }

  //Images Upload Section
  handleFileInput(imageInput: any) {
    let me = this;
    let file = imageInput.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
      if( reader.result != null)
      me.ImageBaseData=reader.result;
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
  
}
