import { Injectable } from '@angular/core';
import { Lista } from '../models/index';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DeseoService {

  listas: Lista[] = [];

  constructor(public storage: Storage) {
    this.cargarListasStorage();
  }

  // FUNCIONES PARA GUARDAR LISTA EN EL STORAGE

  agregarListaStorage( lista: Lista ) {
    this.listas.push( lista );
    this.guardarListaStorage();
  }

  borrarListaStorage( lista: Lista){
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    });
    this.guardarListaStorage();
  }

  guardarListaStorage() {
    this.storage.set( 'data', this.listas );
  }

  cargarListasStorage() {
    this.storage.get('data').then( datosStorage => {
      this.listas = datosStorage ;
    });
  }

  // initDatabase(){
  //   this.storage.set( 'data', [{
  //     id: null,
  //     titulo: null,
  //     creadaEn: null,
  //     terminadaEn: null,
  //     terminada: null,
  //     items: null
  //   }]);
  // }
 
  
}
