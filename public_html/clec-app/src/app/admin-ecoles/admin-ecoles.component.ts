import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-ecoles',
  templateUrl: './admin-ecoles.component.html',
  styleUrls: ['./admin-ecoles.component.css']
})
export class AdminEcolesComponent implements OnInit {

  openedContainer:string = "add";

  constructor() { }

  ngOnInit(): void {
  }

  updateAddView(){
      this.openedContainer = "add";
  }

  updateRemoveView() {
      this.openedContainer = "remove";
  }

  updateListView() {
      this.openedContainer = "list";
  }
}
