import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lista_autosComponent } from './autos/lista_autos/lista_autos.component';
import { Detalle_autosComponent } from './autos/detalle_autos/detalle_autos.component';
import { InicioComponent } from './autos/inicio/inicio.component';
import { EstrellasComponent } from './shared/estrellas/estrellas/estrellas.component';
import { TraducePipe } from './shared/traduce.pipe';
import { AEspacioPipe } from './shared/a-espacio.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lista_autosComponent,
    Detalle_autosComponent,
    InicioComponent,
    EstrellasComponent,
    TraducePipe,
    AEspacioPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


