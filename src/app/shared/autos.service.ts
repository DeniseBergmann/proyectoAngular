import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";
import { Observable, of, forkJoin } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AutosService {
  private listaAutos: Auto[] = [
    {codigo: "B001", marca: "Ford", modelo: "Mustang", anio: 2023, color: "Blanco", kilometros: 15500, calificacion: 4.6, precio: 141000, imagenUrl: "assets/ImagenesAutos/2024-Ford-Mustang.png"},
    {codigo: "B002", marca: "Subaru", modelo: "BRZ", anio: 2024, color: "Azul", kilometros: 20080, calificacion: 5, precio: 135045, imagenUrl: "assets/ImagenesAutos/2024-subaru-brz.png"},
    {codigo: "B003", marca: "Audi", modelo: "RS5", anio: 2022, color: "Azul", kilometros: 25500, calificacion: 3.7, precio: 178900, imagenUrl: "assets/ImagenesAutos/2024-audi-rs-5.png"},
    {codigo: "B004", marca: "BMW", modelo: "M4", anio: 2020, color: "Azul Oscuro", kilometros: 27500, calificacion: 4.3, precio: 193300, imagenUrl: "assets/ImagenesAutos/2023-bmw-m4_1.png"},
    {codigo: "B005", marca: "Jaguar", modelo: "F-Type", anio: 2021, color: "Plomo", kilometros: 17200, calificacion: 3.9, precio: 191000, imagenUrl: "assets/ImagenesAutos/2024-jaguar-f-Type.png"},
  ];

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };

  getAutos(): Observable<Auto[]> {
    return forkJoin([
      this.http.get<Respuesta>(this.baseUrl + "vehiculos/"),
      of(this.listaAutos)
    ]).pipe(
      map(([respuestaServidor, autosLocales]) => {
        const autosServidor = respuestaServidor.data;
        return autosServidor.concat(autosLocales);
      })
    );
  }

  insertAuto(auto: Auto): Observable<Respuesta> {
    return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", auto, this.httpOptions);
  }

  getAuto(id: number): Observable<Auto | undefined> {
    const autoEncontrado = this.listaAutos.find(auto => auto.codigo == '1');
    return of(autoEncontrado);
  }

  addAuto(auto: Auto): void {
    this.listaAutos.push(auto);
  }
}

interface Respuesta {
  codigo: string,
  mensaje: string,
  data: Auto[]
}
