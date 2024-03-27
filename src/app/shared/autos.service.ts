import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
})
export class AutosService {
  private autos: Auto[] = [];

  constructor() {
    this.autos = this.determinaListaAutos();
  }

  obtenListaAutos(): Auto[] {
      return this.autos;
  }

  addAuto(auto: Auto): void {
      this.autos.push(auto);
  }

  obtenAuto(id: number): Auto | undefined {
      return this.autos.find(auto => auto.id === id);
  }

  private determinaListaAutos(): Auto[] {
      return [
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
          }
      ];
  }
}
