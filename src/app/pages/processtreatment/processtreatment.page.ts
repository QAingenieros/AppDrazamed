import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import * as moment from 'moment';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-processtreatment',
  templateUrl: './processtreatment.page.html',
  styleUrls: ['./processtreatment.page.scss'],
})
export class ProcesstreatmentPage implements OnInit {

  porcentaje: any;
  restante: any;
  alarma: any;
  apiUrl7 = `images/products/`;
  apiUrl8 = `.jpg`;
  base_url: any;
  tomadas: any;
  faltantes: any;
  taken: any;
  fecha: any;
  constructor(private router: Router, private route: ActivatedRoute, private config: ConfigService, public menuCtrl: MenuController) {
    this.base_url = config.get_base_url();
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.alarma = this.router.getCurrentNavigation().extras.state.user;
        this.fecha = moment(this.alarma.next_date).format('L')
        console.log(this.alarma);
        this.taken = this.alarma.taken;
        this.porcentaje = (this.taken / this.alarma.total) * 100;
        this.restante = Math.ceil(100 - this.porcentaje);
        this.faltantes = this.alarma.total - this.taken;
        console.log('Se ha tomado ' + this.taken);
      }
    });

    /*this.taken = this.pastillas - 1;
    console.log(this.taken);
    this.porcentaje = (this.taken / this.pastillas) * 100;
    this.restante = 100 - this.porcentaje;*/
  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  goHome() {
    this.router.navigate(['perfil']);
  }
  goPerfil() {
    this.router.navigate(['perfil']);
  }
}