import { Component } from '@angular/core';
import { DeseoService } from '../../services/deseo.service';
import { Lista, ListaItem } from '../../models/index';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage {
  
  lista: Lista;
  nombreItem = '';
  listas: Lista[] = [];

  constructor(public service: DeseoService, public activatedRoute: ActivatedRoute, private router: Router, private storage: Storage) {
    if (this.router.getCurrentNavigation().extras.state) {
      if ( this.router.getCurrentNavigation().extras.state.data ){
        const { data } = this.router.getCurrentNavigation().extras.state;
        this.lista = new Lista( data.titulo );
        this.service.agregarListaStorage(this.lista);
      } else {
        const { lista } = this.router.getCurrentNavigation().extras.state;
        this.lista = lista;
      } 
    }
   }
 
  agregarItem(){
    if (this.nombreItem.length === 0) {
      return;
    }
    const nuevoItem = new ListaItem( this.nombreItem );
    this.lista.items.push( nuevoItem );
    this.service.guardarListaStorage();
    this.nombreItem = '';
  }

  actualizarTarea(item: ListaItem) {
    item.completado = !item.completado;
    const pendientes = this.lista.items.filter( (itemData) => {
      return !itemData.completado;
    }).length;
    
    if ( pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.terminada = false;
      this.lista.terminadaEn = null;
    }

    this.service.guardarListaStorage();
  }

  borrarItem( index: number ) {
    this.lista.items.splice(index, 1);
    this.service.guardarListaStorage();
  }

}
