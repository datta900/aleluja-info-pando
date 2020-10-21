import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu'

import { HomepageComponent } from './homepage/homepage.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { LinksComponent } from './links/links.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NoteComponent } from './testi/note/note.component';
import { LettereComponent } from './testi/lettere/lettere.component';
import { ArticoliComponent } from './testi/articoli/articoli.component';
import { OpereComponent } from './testi/opere/opere.component';
import { MammaComponent } from './gallery/mamma/mamma.component';
import { HabemusPapamComponent } from './news/habemus-papam/habemus-papam.component';
import { MeriniComponent } from './news/merini/merini.component';
import { GrittiniComponent } from './news/grittini/grittini.component';
import { SegnalazioniComponent } from './news/segnalazioni/segnalazioni.component';
import { BioeticaComponent } from './news/bioetica/bioetica.component';
import { HsiaoChinComponent } from './news/hsiao-chin/hsiao-chin.component';
import { HelenaComponent } from './news/helena/helena.component';



@NgModule({
  declarations: [
    AppComponent,
    
    HomepageComponent,
    BiografiaComponent,
  
    LinksComponent,
    ContattiComponent,
    NoteComponent,
    LettereComponent,
    ArticoliComponent,
    OpereComponent,
    MammaComponent,
    HabemusPapamComponent,
    MeriniComponent,
    GrittiniComponent,
    SegnalazioniComponent,
    BioeticaComponent,
    HsiaoChinComponent,
    HelenaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatMenuModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
