import { Component, OnInit } from '@angular/core';
import { Auto } from '../../datos/auto';
import { AutosService } from '../../shared/autos.service';

@Component({
  selector: 'app-Registro',
  templateUrl: './Registro.component.html',
  styleUrls: ['./Registro.component.css']
})
export class RegistroComponent implements OnInit {

  auto: Auto = {
    id: 0,
    marca: "",
    modelo: "",
    anio: 0,
    color: "",
    kilometros: 0,
    calificacion: 0,
    precio: 0,
    imagenUrl: null
  };

  constructor(private autosService: AutosService) { }

  ngOnInit() {
  }

  guardar() {
    this.autosService.addAuto(this.auto);
    console.log("Grabado con éxito");
  }

}
