import { BdService } from './bd.service'
import { Injectable } from '@angular/core';
import { Client } from '../entite/Client';
import { Admin } from '../entite/Admin';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogedInObs: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  logoutAdmin = false;
  logoutUser = false;
  isAuthAdmin = false;
  isAuthUser = false;
  admins: Array<Admin> = [];
  users: Array<Client> = [];
  client: any = undefined;
  admin: any = undefined;

  constructor(private serviceBd: BdService) {
        this.resetAdmins();
  }

  resetUsagers() {
    return this.serviceBd.getDataUsers("usagers.json")
      .then((data: any) => {
        this.users.splice(0);
        for (let i = 0; i < data.length; i++) {
          this.users.push(data[i]);
        }
      })
  }

  resetAdmins() {
    return this.serviceBd.getData("admins.json")
      .then((data: any) => {
        this.admins.splice(0);
        for (let i = 0; i < data.length; i++) {
          this.admins.push(data[i]);
        }
      });
  }

  signInAdmin(userId: string, password: string) {
      for (let index = 0; index < 2; index++) {
        if (userId === this.admins[index].username && password === this.admins[index].username) {
          this.admin = this.admins[index];
          this.isAuthAdmin = true;
          this.isAuthUser = false;
          return true;
        }
      }
      return false;
  }

  signInUser(userId: string, password: string) {
      this.resetUsagers().then(() => {
        for (var index = 0; index < this.users.length; index++) {
          if (userId === this.users[index].email && password === this.users[index].motDePasse) {
            this.isAuthAdmin = false;
            this.isAuthUser = true;
            this.isLogedInObs.next(true);
            console.log("je suis ici");
            this.client = this.users[index];
            return;
          }
        }
        console.log("avant next final");
        this.isLogedInObs.next(false);
      });
  }

  signOut() {
    this.isAuthAdmin = false;
    this.isAuthUser = false;
    this.client = undefined;
    this.admin = undefined;
  }
}
