import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutosService } from '../../shared/autos.service';
import { Auto } from '../../datos/auto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './Registro.component.html',
  styleUrls: ['./Registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private autoServicio: AutosService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      codigo: [],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      color: ['', Validators.required],
      kilometros: ['', Validators.required],
      calificacion: ['', Validators.required],
      precio: [],
    });
  }

  ngOnInit() {
  }

  guardar() {
    if (this.formulario.valid) {
      this.autoServicio.insertAuto({...this.formulario.value}).subscribe(
        respuesta => {
          if(respuesta.codigo === '1') {
            this.mostrarMensajeExito("Vehículo registrado con éxito");
            this.formulario.reset();
          } else {
            this.mostrarMensajeError("No se pudo registrar el vehículo: " + respuesta.mensaje);
          }
        },
        error => {
          console.error("Error al registrar el vehículo:", error);
          this.mostrarMensajeError("Ocurrió un error al registrar el vehículo");
        }
      );
    } else {
      this.mostrarMensajeError("Faltan llenar campos");
    }
  }

  mostrarMensajeExito(mensaje: string): void {
    Swal.fire({
      title: "Mensaje",
      text: mensaje,
      icon: "success"
    });
  }

  mostrarMensajeError(mensaje: string): void {
    Swal.fire({
      title: "Mensaje",
      text: mensaje,
      icon: "error"
    });
  }
}


