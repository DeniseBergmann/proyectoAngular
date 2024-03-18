import { Component, OnInit } from '@angular/core';
import { Auto } from '../../datos/auto';

@Component({
  selector: 'app-lista_autos',
  templateUrl: './lista_autos.component.html',
  styleUrls: ['./lista_autos.component.css']
})
export class Lista_autosComponent implements OnInit {

  tituloListaAutos: string = "Lista de Autos";

  listaAutos: Auto[] = [];
  listaAutosFiltrados: Auto[] = [];

  anchoImagen = 120;
  margenImagen = 5;
  muestraImagen: boolean = false;

  private _filtro : string = "";
  get filtro(): string {
    return this._filtro;
  }
  set filtro( filtrarPor: string ) {
    filtrarPor = filtrarPor.toLowerCase();
    this.listaAutosFiltrados = this.listaAutos.filter(
      (auto: Auto) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
    )
    console.log ( filtrarPor );
  }

  descripción = "Prueba de enlace entre componentes";

  ngOnInit(): void {
    this.listaAutos = [
      {
        id: 1,
        marca: "Ford",
        modelo: "Mustang",
        anio: 2024,
        color: "Blanco",
        kilometros: 15500,
        calificacion: 4.6,
        precio: 141000,
        imagenUrl: "assets/ImagenesAutos/2024-Ford-Mustang.png"
      },
      // Resto de los autos...
    ];
    this.listaAutosFiltrados = this.listaAutos;
  }

  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }
}
