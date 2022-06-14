import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private http: HttpClient) {

  }

  getAll(){
    return this.http.get('https://62a758fc97b6156bff8cef5c.mockapi.io/api/prueba/prueba_tecnica');
  }

  create(registro: any){
    return this.http.post('https://62a758fc97b6156bff8cef5c.mockapi.io/api/prueba/prueba_tecnica', registro);
  }
}