import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

//variables para formulario

nombre = ''
apellido = ''
email = ''
telefono = ''
ciudad = ''
pais = ''
registro: any[] = [];

objeto = {};


   


constructor(private appcomponent: AppComponent, private fb: FormBuilder) { 
  
}

json(){
  this.registro.push({
    "nombre"    : this.nombre,
    "apellido"  : this.apellido,
    "email"    : this.email,
    "telefono" : this.telefono,
    "ciudad": this.ciudad,
    "pais": this.pais
});

}

ngOnInit(): void {
  this.getAll();  
}
getAll(){
  this.appcomponent.getAll().subscribe((perfiles: any) => {
    this.registro;
})

}

save(){
  const values = this.registro;
  this.json();
  console.log('values', values);

  this.appcomponent.create(values).subscribe(() => {
    this.getAll();
  }
  
  )
}

}
