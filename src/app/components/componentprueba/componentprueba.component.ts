import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-componentprueba',
  templateUrl: './componentprueba.component.html',
  styleUrls: ['./componentprueba.component.css']
})
export class ComponentpruebaComponent implements OnInit {
  conversion:any;
  rta:[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get('https://www.datos.gov.co/resource/xdk5-pm3f.json')
      .subscribe(data =>{
          this.conversion=data;
          this.rta=this.conversion;

          console.log('Prueba' , this.rta);
      });

  }

}
