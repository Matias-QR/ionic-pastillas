import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //enviar y recibir las variables.
  cadena: string = 'Mi cadena';
  cadena2: string = 'Matías Quezada Radovcic';
  precio: number = 0;
  activado: boolean = false;

  arreglo_numerico: number[] = [1,2,3,4,5,6,7,8,9,10];
  arreglo_cadena: string[] = ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];
  
  variable: any = 'Hola';
  arreglo_variable: any[] = ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];

  usuarioRecibido: string='';
  passwordRecibido: string='';
  nombre: string='';
  apellido: string='';
  selectedOption: string='';
  selectedDate: string='';

  constructor(private router: Router, private activateroute:ActivatedRoute, private toastController: ToastController, private alertController:AlertController) {
    this.activateroute.queryParams.subscribe( params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'];
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['passwordEnviado'];

        console.log();
      }
    })
  }

  ngOnInit() {   
}

navegarAOtraPagina(){
  let NAvigationExtras: NavigationExtras = {
    state: {
      cadenaEnviada: this.cadena,
      precioEnviado: this.precio
    }
  }
  this.router.navigate(['/tabs/tab3'], NAvigationExtras);
}

irAMiPagina(){
  this.router.navigate(['/tabs']);
}

cerrarSesion(){
  this.router.navigate(['/login']);
}

async presentToast(){
  const toast = await this.toastController.create({
    message: 'Hecho por: ' + this.cadena2,
    duration: 2000
  });
  toast.present();

}

async presentAlert(message: string) {
  const alert = await this.alertController.create({
    header: 'Mensaje',
    message: message,
    buttons: ['OK']
  });

  await alert.present();
}

mostrar() {
  if (this.nombre.trim() === '' || this.apellido.trim() === '') {
    this.presentAlert('Error: nombre y apellido vacios');
  } else {
    // Logica para manejar el envio del formulario cuando es valido
    this.presentAlert('Su nombre es:' +this.nombre+' '+this.apellido);
  }
}

limpiar() {
  this.nombre = '';
  this.apellido = '';
  this.selectedOption = '';
  this.selectedDate = '';
}}