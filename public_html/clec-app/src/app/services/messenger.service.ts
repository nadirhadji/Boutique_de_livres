import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(livre: Livre) {
    console.log(livre);
    this.subject.next(livre);
  };

  getMsg() {
    return this.subject.asObservable();
  };
}
