import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lista_autosComponent } from './autos/lista_autos/lista_autos.component';
import { TraducePipe } from './shared/traduce.pipe';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { EstrellasComponent } from './shared/estrellas/estrellas/estrellas.component';
import { Detalle_autosComponent } from './autos/detalle_autos/detalle_autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    Lista_autosComponent,
    EstrellasComponent,
    AEspacioPipe,
    TraducePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: "autos", component: Lista_autosComponent},
      {path: "autos/:id", component: Detalle_autosComponent},
      {path: "inicio", component: InicioComponent},
      {path: "", redirectTo: "inicio", pathMatch: "full"},
      {path: "**", redirectTo: "inicio", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

