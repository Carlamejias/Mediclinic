import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user={
    rut:"",
    nombre:"",
    apellido:"",
    mail:"",
    telefono:""
  }
  data: any;
  registerForm: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ingresar(){

    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    this.router.navigate(['/home'],navigationExtras);
  }

  formatRut(){
    var rut = this.registerForm.get('rut').value;
    if ( /^[0-9]*$/.test(rut)) {
      rut = this.clean(rut)
      var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
      for (var i = 4; i < rut.length; i += 3) {
        result = rut.slice(-3 - i, -i) + '.' + result
      }
      this.registerForm.controls['rut'].setValue(result);
    } 
    else {
      this.registerForm.controls['rut'].setValue(rut);
    }
    
  }
  clean (rut) {
    return typeof rut === 'string'
      ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
      : ''
  }

}

