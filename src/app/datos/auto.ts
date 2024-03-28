export class Auto {
  codigo: string;
  marca: string;
  modelo: string;
  anio: number;
  color: string;
  kilometros: number;
  calificacion: number;
  precio: number;
  imagenUrl: string | null;

  constructor(
    codigo: string,
    marca: string,
    modelo: string,
    anio: number,
    color: string,
    kilometros: number,
    calificacion: number,
    precio: number,
    imagenUrl: string | null
  ) {
    this.codigo = codigo;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
    this.kilometros = kilometros;
    this.calificacion = calificacion;
    this.precio = precio;
    this.imagenUrl = imagenUrl;
  }
}

