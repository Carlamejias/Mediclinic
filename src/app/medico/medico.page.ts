import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { NavController } from '@ionic/angular';
// Se importa ServicioService para consumir el API para cosumirala en la page medico
//'../servicio.service' selecciona el direcctorio del servicio
//"../" Sirve para retorcer de direcctorio 
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})
export class MedicoPage implements OnInit {
  
  

  usuarios


  data

  //Declarar 'servicioService' dentro de 'constructor'
  constructor(private router: Router, public servicio:ServicioService) {

    this.servicio.getPosts<any[]>("").subscribe(data => {
      this.usuarios = data 
      console.log(this.usuarios);
    })
  
  }

  
  

  ngOnInit() {
  }
  
  calendario(){

    let navigationExtras: NavigationExtras = {
    };

    this.router.navigate(['/calendario'],navigationExtras);
  }

}
