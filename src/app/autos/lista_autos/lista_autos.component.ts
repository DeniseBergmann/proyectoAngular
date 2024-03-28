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

  public listaAutos: Array<Auto> = [];
  listaAutosFiltrados: Auto[] = [];
  anchoImagen = 120;
  margenImagen = 5;
  muestraImagen: boolean = false;
  private _filtro: string = "";

  constructor(private _autosService: AutosService) { }

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
    this._autosService.getAutos().subscribe(
      respuesta => {
        console.log(respuesta);
        this.listaAutos = respuesta;
        this.listaAutosFiltrados = this.listaAutos; // Inicialmente, establecer los autos filtrados como la lista completa
      }
    );
  }

  agregarAuto(auto: Auto): void {
    this._autosService.addAuto(auto);
  }
}
