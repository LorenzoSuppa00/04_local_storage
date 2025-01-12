import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contatto } from '../../models/contatto';

@Component({
  selector: 'app-contatto-inserimento',
  imports: [FormsModule],
  templateUrl: './contatto-inserimento.component.html',
  styleUrl: './contatto-inserimento.component.css'
})
export class ContattoInserimentoComponent {
  postaElettronica: string | undefined;
  nome: string | undefined;
  cognome: string | undefined;
  eta: number | undefined;
  professione: string | undefined;
  descrizione: string | undefined;

  

  save(): void {
    let contatto = new Contatto(this.postaElettronica, this.nome, this.cognome, this.eta, this.professione, this.descrizione);
    let elenco_contatti: Contatto[] = [];
    elenco_contatti.push(contatto);
  }
}
