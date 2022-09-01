import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})
export class MedicoPage implements OnInit {
  user={
    rut:"",
    nombre:"",
    apellido:"",
    mail:"",
    telefono:""

  }
  data: any;

  med={
    nombre:""
  }
  registerForm: any;
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
  ingresar(){

    let navigationExtras: NavigationExtras = {
      state: {
        med: this.med 
      }
    };
    this.router.navigate(['/calendario'],navigationExtras);
  }

}
