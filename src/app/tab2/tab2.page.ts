import { Component } from '@angular/core';
import { DeseoService } from '../services/deseo.service';
import { Lista } from '../models/lista.model';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navCtrl: NavController, 
              private alertCtrl: AlertController, 
              public router: Router,
              public service: DeseoService,
              private storage: Storage) 
  {
  // this.service.initDatabase();
  this.service.cargarListasStorage();
  }
  
  
  listaSeleccionada( lista: Lista ) {
  this.navCtrl.navigateForward('add', {
    state: {
      lista
      }
    });
  }
  
  async agregarLista() {
  
  const alert = await this.alertCtrl.create({
  header: 'Nueva Lista',
  message: 'Nombre de la nueva lista que desea',
  inputs: [
  {
    name: 'titulo',
    type: 'text',
    placeholder: 'Título'
  }
  ],
  buttons: [
  {
    text: 'Cancelar',
  }, {
    text: 'Agregar',
    handler: data => {
      if (data.titulo.length === 0) {
        return;
      }
      this.navCtrl.navigateForward(
        'add', {
          state: {
            data
          }
      });
    }
  }
  ]
  });
  await alert.present();
  }
  
  borrarLista(lista: Lista){
  this.service.borrarListaStorage(lista);
  }  

}
