import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-registropac',
  templateUrl: './registropac.page.html',
  styleUrls: ['./registropac.page.scss'],
})
export class RegistropacPage implements OnInit {

  user={

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
  registrar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };

    this.router.navigate(['/medico'],navigationExtras);
  }
}