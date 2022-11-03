import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  Usuarios={
    id:"",
    nombre:"",
    password:"",
  }

  med={
    nombremed:""    
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
  registrar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.Usuarios 
      }
    };

    this.router.navigate(['/medico'],navigationExtras);
  }
}