import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lista_autosComponent } from './autos/lista_autos/lista_autos.component';
import { Detalle_autosComponent } from './autos/detalle_autos/detalle_autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';

const routes: Routes = [
  { path: "autos", component: Lista_autosComponent },
  { path: "autos/:id", component: Detalle_autosComponent },
  { path: "inicio", component: InicioComponent },
  { path: "", redirectTo: "inicio", pathMatch: "full" },
  { path: "**", redirectTo: "inicio", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
