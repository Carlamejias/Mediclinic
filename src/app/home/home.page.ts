/** Importaciones de librerias a usar */

import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

// Decorador Componente este indica que el Home Page es un Componente
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], 
})
export class HomePage implements OnInit{
  user={
    rut:"",
    nombre:"",
    apellido:"",
    mail:"",
    telefono:""
  }
  data: any; 
  constructor(private activeroute: ActivatedRoute, private router: Router) {
    
    this.activeroute.queryParams.subscribe(params => { 
      if (this.router.getCurrentNavigation().extras.state) { 
        this.data = this.router.getCurrentNavigation().extras.state.user; 
        console.log(this.data) 
      }else{this.router.navigate(["/login"])} 
    });
  }
  ngOnInit() {
  }
  registro(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };

    this.router.navigate(['/registropac'],navigationExtras);
  }
}
