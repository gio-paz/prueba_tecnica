import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { RegistroComponent } from '../registro/registro.component';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  nombre = this.ngOnInit()
  apellido = this.appcomponent.getAll().subscribe((perfiles: any) => {
    return perfiles.apellido;
  })
  email = this.appcomponent.getAll().subscribe((perfiles: any) => {
    return perfiles.email;
  })
  telefono = this.appcomponent.getAll().subscribe((perfiles: any) => {
    return perfiles.telefono;
  })
  ciudad = this.appcomponent.getAll().subscribe((perfiles: any) => {
    return perfiles.ciudad;
  })
  pais =  this.appcomponent.getAll().subscribe((perfiles: any) => {
    return perfiles.pais;
  })
  perfil: any[] = [];

  constructor(private appcomponent: AppComponent) { }


  ngOnInit(): void {
    this.appcomponent.getAll().subscribe((perfiles: any) => {
      console.log('perfil', perfiles.nombre)
      return perfiles;
    })
  }

  

}
