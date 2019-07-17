import { Component, Input } from '@angular/core';
import { DeseoService } from '../../services/deseo.service';
import { Lista } from '../../models/index';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {

  @Input() terminada: boolean = false;

  constructor(private navCtrl: NavController,
              public service: DeseoService,
              private alertCtrl: AlertController) { }


  borrarLista(lista: Lista){
    this.service.borrarListaStorage(lista);
  }
  
  listaSeleccionada( lista: Lista ) {
    this.navCtrl.navigateForward('agregar', {
      state: {
        lista
      }
    });
  }

  async actualizarNombreLista( lista: Lista ) {

    const alert = await this.alertCtrl.create({
      header: 'Cambiar título',
      message: 'Nuevo nombre de la lista',
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
          text: 'Actualizar',
          handler: data => {
            if (data.titulo.length === 0) {
              return;
            } else {
              lista.titulo = data.titulo;
            }
          }
        }
      ]
    });
    await alert.present();
  }
}


