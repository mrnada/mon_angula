import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { environment} from '../environments/environment';

import { ListeVoituresComponent } from './liste-voitures/liste-voitures.component';
import { VoitureService } from './shared/voiture.service';

import { AddVoitureComponent } from './add-voiture/add-voiture.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListeVoituresComponent,
    AddVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [VoitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
