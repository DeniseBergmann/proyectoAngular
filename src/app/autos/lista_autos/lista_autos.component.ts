import { Component, OnInit } from '@angular/core';
import { Auto } from '../../datos/auto';
import { AutosService } from '../../shared/autos.service';

@Component({
  selector: 'app-lista_autos',
  templateUrl: './lista_autos.component.html',
  styleUrls: ['./lista_autos.component.css']
})
export class ListaAutosComponent implements OnInit {

  tituloListaAutos: string = "Lista de Autos";

  listaAutos: Auto[] = [];
  listaAutosFiltrados: Auto[] = [];

  anchoImagen = 120;
  margenImagen = 5;
  muestraImagen: boolean = false;

  private _filtro: string = "";
get filtro(): string {
  return this._filtro;
}
set filtro(filtrarPor: string) {
  this._filtro = filtrarPor.toLowerCase();
  this.filterAutos();
}

filterAutos(): void {
  if (this._filtro.trim() !== "") {
    this.listaAutosFiltrados = this.listaAutos.filter(
      (auto: Auto) => auto.marca.toLowerCase().includes(this._filtro)
    );
  } else {
    this.listaAutosFiltrados = this.listaAutos;
  }
}

  descripción = "Prueba de enlace entre componentes";

  constructor(
    private _autosService: AutosService,
  ) {}

  ngOnInit(): void {
    this.obtenerAutos();
  }

  toggleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  onClickCalificacion(mensaje: string): void {
    alert("Dieron click en la calificación: " + mensaje);
  }

  obtenerAutos(): void {
    this._autosService.getAutos('').subscribe(
      autos => {
        this.listaAutos = autos;
        this.filterAutos();
      }
    );
  }

  agregarAuto(auto: Auto): void {
    this._autosService.addAuto(auto);
  }

}

