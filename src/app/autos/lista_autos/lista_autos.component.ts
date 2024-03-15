import { Component, OnInit } from '@angular/core';
import { Auto } from 'src/app/datos/auto';

@Component({
  selector: 'app-lista_autos',
  templateUrl: './lista_autos.component.html',
  styleUrls: ['./lista_autos.component.css']
})
export class Lista_autosComponent implements OnInit {
  tituloListaAutos: string = "Lista de Autos";

  listaAutos: Auto[] = [];
  muestraImagen: boolean = false;
  filtro = "fil";
  anchoImagen = 120;
  margenImagen = 5;


  constructor() { }

  ngOnInit(): void {
    this.listaAutos = [

    ]:
  }

  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }
}
