import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  patente: string="";

  nombre: any = 'Taller 1';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  ingresarPatente() {
    if (this.patente.trim() == 'GHTR77') {
      let NavigationExtras: NavigationExtras = {
        state:{
          patenteEnviada: this.patente,
        }

      }
      this.router.navigate(['/tab2'],NavigationExtras);
    }
    else{
      this.presentAlert('incorrecto');
    }
  }


async presentAlert(message: string) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Alerta',
    message: 'Debe ingresar un número correcto de patente.',
    buttons: [
      {
        text: 'Aceptar',
        handler: () => { 
          //console.log('Usuario presionó Aceptar'); 
          this.router.navigate(['/tabs/tab1']);
        }
      }
    ]
  });

  await alert.present();

}

volverHome(){
  this.router.navigate(['/home']);
}

}
