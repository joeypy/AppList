import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DeseoService } from '../services/deseo.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{


  listasPendientes: boolean;

  constructor(private navCtrl: NavController, 
              private alertCtrl: AlertController, 
              public router: Router,
              public service: DeseoService) 
  {
    // this.service.initDatabase();
    this.service.cargarListasStorage();
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
                'agregar', {
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

}



