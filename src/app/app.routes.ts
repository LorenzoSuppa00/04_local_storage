import { Routes } from '@angular/router';
import { ContattoInserimentoComponent } from './components/contatto-inserimento/contatto-inserimento.component';

export const routes: Routes = [
    { path: "", redirectTo: "aggiungi-contatto", pathMatch: 'full' },
    { path: "aggiungi-contatto", component: ContattoInserimentoComponent },
];
