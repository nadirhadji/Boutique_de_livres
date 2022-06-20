import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  vldMsg(form: NgForm) {
    
    alert("Message Envoyé");
    
  }

}
