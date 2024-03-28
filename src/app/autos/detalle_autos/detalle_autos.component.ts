import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from '../../shared/autos.service';
import { Auto } from '../../datos/auto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle_autos.component.html',
  styleUrls: ['./detalle_autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

  auto?: Auto;
  formulario: FormGroup;
  tituloPagina: string = "Detalle del Auto";

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _autosService: AutosService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio": ['', [Validators.required]],
      "color": ['', [Validators.required]],
      "kilometros": ['', [Validators.required]],
      "calificacion": ['', [Validators.required]],
      "precio": [],
    });
    this.formulario.controls['codigo'].disable();
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._autosService.getAuto(params['codigo']).subscribe(data => {
        if (data?.codigo == '1') {
          this.auto = data;
          this.formulario.patchValue({
            codigo: this.auto?.codigo,
            marca: this.auto?.marca,
            modelo: this.auto?.modelo,
            anio: this.auto?.anio,
            calificacion: this.auto?.calificacion,
            precio: this.auto?.precio,
            kilometros: this.auto?.kilometros
          });
        } else {
          Swal.fire({
            title: "Mensaje de alerta",
            text: "No se pudo cargar la información",
            icon: "error"
          });
        }
      });
    });
  }

  onBack(): void {
    this._router.navigate(['/autos']);
  }

  onClickCalificacion(event: any) {
  }
}
