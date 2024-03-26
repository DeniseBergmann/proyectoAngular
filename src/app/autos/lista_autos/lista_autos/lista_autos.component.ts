import { Component, OnInit } from '@angular/core';
import { Auto } from '../../../datos/auto';
import { AutosService } from '../../../shared/autos.service';

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

  constructor(private _autosService: AutosService) {}

  ngOnInit(): void {
    this.listaAutos = this._autosService.obtenListaAutos();
    this.listaAutosFiltrados = this.listaAutos;
  }

  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  onClickCalificacion( mensaje: string ): void {
    alert( "Dieron click en la calificacion: " + mensaje );
  }
}
