import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomepageComponent } from './homepage/homepage.component';
import { BiografiaComponent } from './biografia/biografia.component';

import { LinksComponent } from './links/links.component';
import { ContattiComponent } from './contatti/contatti.component';

import {NoteComponent} from './testi/note/note.component';
import {LettereComponent} from './testi/lettere/lettere.component';
import {ArticoliComponent} from './testi/articoli/articoli.component';
import {OpereComponent} from './testi/opere/opere.component';

import {MammaComponent} from './gallery/mamma/mamma.component';

import {HabemusPapamComponent} from './news/habemus-papam/habemus-papam.component';
import { MeriniComponent } from './news/merini/merini.component';
import { GrittiniComponent } from './news/grittini/grittini.component';
import { SegnalazioniComponent } from './news/segnalazioni/segnalazioni.component';
import { BioeticaComponent } from './news/bioetica/bioetica.component';
import { HsiaoChinComponent } from './news/hsiao-chin/hsiao-chin.component';
import { HelenaComponent } from './news/helena/helena.component';


const routes: Routes = [
  { path: 'homepage', component:  HomepageComponent},
  { path: 'biografia', component:  BiografiaComponent},
  { path: 'testi',
    children: [
      {path: 'note', component: NoteComponent},
      {path: 'lettere', component: LettereComponent},
      {path: 'articoli', component: ArticoliComponent},
      {path: 'opere', component: OpereComponent},

  ]},
  { path: 'gallery',
    children: [
      {path: 'mamma', component: MammaComponent},
      {path: 'lettere', component: LettereComponent},
      {path: 'articoli', component: ArticoliComponent},
      {path: 'opere', component: OpereComponent},

  ]},
  { path: 'news',
    children: [
      {path: 'habemus-papam', component: HabemusPapamComponent},
      {path: 'merini', component: MeriniComponent},
      {path: 'grittini', component: GrittiniComponent},
      {path: 'segnalazioni', component: SegnalazioniComponent},
      {path: 'bioetica', component: BioeticaComponent},
      {path: 'hsiao-chin', component: HsiaoChinComponent},
      {path: 'helena', component: HelenaComponent},


]},
  { path: 'links', component:  LinksComponent },
  { path: 'contatti', component:  ContattiComponent }  
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
