import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  cadenaRecibida: string='';
  precioRecibido: number=0;
  codigoItal1: number=939;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { 
}

  ngOnInit() {
  }

  volverTabs(){
    this.router.navigate(['/tabs/tab1']);
  }
}
