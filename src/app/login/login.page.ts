import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

import { DbserviceService } from 'src/app/services/dbservice.service';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  Usuarios={
    ID:"",
    nombre:"",
    password:"",
  }
  
  field:string="";

  constructor(private dbservice: DbserviceService, 
    private router: Router,
    public toastController: ToastController,
    public alertController: AlertController,
    private storage: Storage,
    public authenticationSerive:AuthenticationService) { }

  ngOnInit() {
  }
  //Funcion ingresar para el inicio de sesion
  ingresar(){
    // Se valida que el usuario ingreso todos los datos
    if(this.validateModel(this.Usuarios)){
      // Se obtiene si existe alguna data de sesión
      this.dbservice.presentToast("Noticia Agregada");
      //Enrutamientoal Home
      this.router.navigate(['/home']);
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }
  registrar(){
    this.addUsuario(this.Usuarios);
  }
  addUsuario(Usuarios: any) {
    if(this.validateModel(Usuarios)){ // Se valida que se ingresen todos los datos
      /**
       * Se hace una copia del login, se hace así ya que
       * el operador '=' no haceuna copia de los datos, si no
       * que crea una nueva referencia a los mismos datos.
       * Por eso se utiliza el Object.assign
       */
      let copy = Object.assign({},Usuarios);
      copy.Active=1; // Se agrega el valor active = 1 a la copia
      this.dbservice.addUsuario(copy) // la copia se le apsa a la función para crear la sesion
      .then((data)=>{ // si la sentencia se ejecuto correctamente
        this.presentToast("Bienvenido"); // Se muestra el mensaje de bienvenido
        this.storage.set("USER_DATA",data);  // Se setea el USER_DATA en el storage
        this.router.navigate(['home']); // Se navega hasta el home
      })
      .catch((error)=>{
        this.presentToast("El usuario ya existe");
      })
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }

  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {
        // Se asigna el campo faltante
        this.field=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

  
  

  

}

