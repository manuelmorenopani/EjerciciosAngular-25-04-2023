import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1ModificarComponent } from './componente1-modificar/componente1-modificar.component';
import { AppComponent } from './app.component';
import { Componente2ListaComponent } from './componente2-lista/componente2-lista.component';

const routes: Routes = [
  {path: '',component:Componente2ListaComponent,children: [

  {path: 'listar', component:Componente2ListaComponent,},
  {path:'modificar/:ids',component:Componente1ModificarComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
