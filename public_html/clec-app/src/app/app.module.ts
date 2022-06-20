import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DropdownToggleHeaderComponent } from './dropdown-toggle-header/dropdown-toggle-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ConnexionComponent } from './connexion/connexion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { InscriptionEcoleComponent } from './inscription-ecole/inscription-ecole.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ListeProduitsComponent } from './shopping-cart/liste-produits/liste-produits.component';
import { ProduitComponent } from './shopping-cart/liste-produits/produit/produit.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { PanierComponent } from './panier/panier.component';
import { MessengerService } from './services/messenger.service';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { HttpClientModule } from '@angular/common/http';
import { BdService } from './services/bd.service';
import { AuthService } from './services/auth.service';
import { AuthGuardUsersService } from './services/auth-guard-users.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ShoolPanelComponent } from './shool-panel/shool-panel.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ClubComponent } from './club/club.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { MatTableModule } from '@angular/material/table'  
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule} from '@angular/material/paginator';
import { DropdownToggleLogedInComponent } from './dropdown-toggle-loged-in/dropdown-toggle-loged-in.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AcceuilClientComponent } from './acceuil-client/acceuil-client.component';
import { AdminMarketingComponent } from './admin-marketing/admin-marketing.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { AdminRabaisComponent } from './admin-rabais/admin-rabais.component';
import { AdminInventaireComponent } from './admin-inventaire/admin-inventaire.component';
import { AdminAjouterComponent } from './admin-ajouter/admin-ajouter.component';
import { AdminEcolesComponent } from './admin-ecoles/admin-ecoles.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ListEcolesComponent } from './list-ecoles/list-ecoles.component';
import { MatSliderModule } from '@angular/material/slider';
import { UpdateBookComponent } from './update-book/update-book.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    CarrouselComponent,
    DropdownToggleHeaderComponent,
    ConnexionComponent,
    InscriptionClientComponent,
    InscriptionEcoleComponent,
    ShoppingCartComponent,
    ListeProduitsComponent,
    ProduitComponent,
    PageProduitComponent,
    AccueilComponent,
    FooterComponent,
    PanierComponent,
    PageErreurComponent,
    AdminPanelComponent,
    ShoolPanelComponent,
    ContactPageComponent,
    ClubComponent,
    SearchPageComponent,
    DropdownToggleLogedInComponent,
    AcceuilClientComponent,
    AdminMarketingComponent,
    AdminRabaisComponent,
    AdminInventaireComponent,
    AdminAjouterComponent,
    AdminEcolesComponent,
    ImageUploadComponent,
    ListEcolesComponent,
    UpdateBookComponent
    ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSliderModule,
    MatSnackBarModule
    ],

  providers: [BdService, MessengerService, AuthService, AuthGuardService, AuthGuardUsersService],
  bootstrap: [AppComponent]

})

export class AppModule { }
