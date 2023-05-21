import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarPeliculaComponent } from './cargar-pelicula/cargar-pelicula.component';
import { ListaPeliculasComponent} from './lista-peliculas/lista-peliculas.component';

const routes: Routes = [
{ path: '', component: ListaPeliculasComponent },
{ path: 'cargar-pelicula', component: CargarPeliculaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
