import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1ModificarComponent } from './componente1-modificar/componente1-modificar.component';
import { FormsModule } from '@angular/forms';
import { Componente2ListaComponent } from './componente2-lista/componente2-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1ModificarComponent,
    Componente2ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
