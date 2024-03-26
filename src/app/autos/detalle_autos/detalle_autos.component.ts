import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutosService } from '../../shared/autos.service';
import { Auto } from '../../datos/auto';

@Component({
  templateUrl: './detalle_autos.component.html',
  styleUrls: ['./detalle_autos.component.css']
})
export class Detalle_autosComponent implements OnInit {

  tituloPagina = "Detalle de autos";
  auto: Auto | undefined;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _autosService: AutosService
  ) {}

  ngOnInit(): void {
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.auto = this._autosService.obtenAuto(id);
    this.tituloPagina += ": " + id;
  }

  onBack(): void {
    this._router.navigate(['/autos']);
  }

  onClickCalificacion(event: any) {
  }
}
