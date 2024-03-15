import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista_autos',
  templateUrl: './lista_autos.component.html',
  styleUrls: ['./lista_autos.component.css']
})
export class Lista_autosComponent implements OnInit {
  tituloListaAutos: string = "Lista de Autos";

  arregloAutos: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
