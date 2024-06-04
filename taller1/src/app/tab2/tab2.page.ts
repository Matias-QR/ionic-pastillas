import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  marca: string="HYUNDAI";
  modelo: string="SERTRA";
  anio: number= 2015;
  patenteRecibida: string='';

  constructor(private router: Router, private activateroute:ActivatedRoute, private toastController: ToastController, private alertController:AlertController) {
    this.activateroute.queryParams.subscribe( params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){

        this.patenteRecibida = this.router.getCurrentNavigation()?.extras?.state?.['patenteEnviada'];

        console.log();
      }
    })
   }

  ngOnInit() {
  }
  
  verPastillas(){
    this.router.navigate(['/tab3']);
  }
}
