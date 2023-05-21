import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-pelicula',
  templateUrl: './cargar-pelicula.component.html',
  styleUrls: ['./cargar-pelicula.component.css']
})
export class CargarPeliculaComponent {
  pelicula = {
    nombre: '',
    imagen: '',
    anio: null,
    genero: '',
    plataforma: ''
  };

  constructor(private router: Router) {}

  cargarPelicula() {
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas') || '[]');
    peliculasGuardadas.push(this.pelicula);
    localStorage.setItem('peliculas', JSON.stringify(peliculasGuardadas));
    console.log('Película cargada con éxito');
    this.router.navigate(['/']);

  }
}
