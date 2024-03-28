import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutosService } from '../../shared/autos.service';
import { Auto } from '../../datos/auto';

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
      id: [],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      color: ['', Validators.required],
      kilometros: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      calificacion: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      precio: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    });
  }

  ngOnInit() {
  }

  guardar() {
    if (this.formulario.valid) {
      const nuevoAuto: Auto = this.formulario.value as Auto;
      this.autoServicio.addAuto(nuevoAuto);
      console.log('Nuevo auto agregado:', nuevoAuto);
      this.formulario.reset();
    } else {
      console.error('El formulario no es válido');
    }
  }
}




