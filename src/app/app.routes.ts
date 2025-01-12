import { Routes } from '@angular/router';
import { ContattoInserimentoComponent } from './components/contatto-inserimento/contatto-inserimento.component';
import { ContattoListaComponent } from './components/contatto-lista/lista.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "contatto/inserisci", component: ContattoInserimentoComponent },
    { path: "contatto/lista", component: ContattoListaComponent},
];
