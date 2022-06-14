import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  nom = ''
  apellido = ''
  email = ''
  telefono = ''
  ciudad = ''
  pais =  ''
 
  constructor(private appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.appcomponent.getAll().subscribe((perfiles: any) => {
    let n  = perfiles.length
    this.nom = perfiles[n-1].nombre
    this.apellido = perfiles[n-1].apellido
    this.email = perfiles[n-1].email
    this.telefono = perfiles[n-1].telefono
    this.ciudad = perfiles[n-1].ciudad
    this.pais = perfiles[n-1].pais    
    })
  }
}
