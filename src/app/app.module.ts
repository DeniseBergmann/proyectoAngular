import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista_autos/lista_autos.component';
import { Detalle_autosComponent } from './autos/detalle_autos/detalle_autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';
import { EstrellasComponent } from './shared/estrellas/estrellas/estrellas.component';
import { TraducePipe } from './shared/traduce.pipe';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { RegistroComponent } from './autos/Registro/Registro.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    Detalle_autosComponent,
    InicioComponent,
    EstrellasComponent,
    TraducePipe,
    AEspacioPipe,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


