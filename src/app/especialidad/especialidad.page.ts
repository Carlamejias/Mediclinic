import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.page.html',
  styleUrls: ['./especialidad.page.scss'],
})
export class EspecialidadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  presencial(){

    this.router.navigate(['login']);
  }

  telemedicina(){

    this.router.navigate(['login']);
  }
  dental(){

    this.router.navigate(['login']);
  }

}

