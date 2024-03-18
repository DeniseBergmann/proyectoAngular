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
      {
        id: 2,
        marca: "Subaru",
        modelo: "BRZ",
        anio: 2024,
        color: "Azul",
        kilometros: 20080,
        calificacion: 5,
        precio: 135045,
        imagenUrl: "assets/ImagenesAutos/2024-subaru-brz.png"
      },
      {
        id: 3,
        marca: "Audi",
        modelo: "RS5",
        anio: 2024,
        color: "Azul",
        kilometros: 25500,
        calificacion: 3.7,
        precio: 178900,
        imagenUrl: "assets/ImagenesAutos/2024-audi-rs-5.png"
      },
      {
        id: 4,
        marca: "BMW",
        modelo: "M4",
        anio: 2023,
        color: "Azul Oscuro",
        kilometros: 27500,
        calificacion: 4.3,
        precio: 193300,
        imagenUrl: "assets/ImagenesAutos/2023-bmw-m4_1.png"
      },
      {
        id: 5,
        marca: "Jaguar",
        modelo: "F-Type",
        anio: 2024,
        color: "Plomo",
        kilometros: 17200,
        calificacion: 3.9,
        precio: 191900,
        imagenUrl: "assets/ImagenesAutos/2024-jaguar-f-Type.png"
      },

    ];
    this.listaAutosFiltrados = this.listaAutos;
  }

  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  onClickCalificacion( mensaje: string ): void {
    alert( "Dieron click en la calificacion: " + mensaje );
  }
}
