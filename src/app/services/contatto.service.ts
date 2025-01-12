//? 1) Cosa fa questo codice? 
//! 1) Inizializza il service.
//? 2) Cosa è il service?
//! 2) È lo strumento per implementare le operazioni di CRUD (Create, Read, Update, Delete)

import { Injectable } from '@angular/core';
import { Contatto } from '../models/contatto';

@Injectable({
  providedIn: 'root'
})
export class ContattoService {

  rubrica: Contatto[] = new Array();

  constructor() {
    // Recupero l'elemento "rubrica_contatti" dal Local Storage
    let localStorageString = localStorage.getItem("rubrica_contatti"); 
    if (!localStorageString) { 
      // Se "rubrica_contatti" non esiste nel Local Storage, lo inizializzo come un array vuoto
      localStorage.setItem("rubrica_contatti", JSON.stringify([])); 
    }
    else {
      // Se esiste, converto la stringa JSON salvata in un array di contatti e lo assegno a "this.rubrica"
      this.rubrica = JSON.parse(localStorageString); 
    }
  }

  insert(objContatto: Contatto): boolean {
    this.rubrica.push(objContatto);
    localStorage.setItem("rubrica_contatti", JSON.stringify(this.rubrica));
    return true; //* Sostituire con l'esito di una REST API in futuro
  }

  getAll(): Contatto[] {
    let localStorageString = localStorage.getItem("rubrica_contatti");
    // Esiste localStorageString ? Sì, allora fai il parse : No, restituisci array vuoto
    this.rubrica = localStorageString ? JSON.parse(localStorageString) : [];
    return this.rubrica;
  }
}
