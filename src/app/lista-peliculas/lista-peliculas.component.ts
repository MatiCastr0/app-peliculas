import { Component, OnInit } from '@angular/core';
import peliculasData from '../../assets/peliculas.json';

class Pelicula {
  nombre!: string;
  imagen!: string;
  anio!: number;
  genero!: string;
  plataforma!: string;
}

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  peliculasFiltradas: Pelicula[] = [];
  filtros: any = {
    anio: null,
    genero: '',
    plataforma: ''
  };

  ngOnInit() {
    const peliculasGuardadas = JSON.parse(localStorage.getItem('peliculas') || '[]');
    this.peliculas = peliculasGuardadas.concat(peliculasData);
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.peliculasFiltradas = this.peliculas.filter(pelicula => {
      if (this.filtros.anio && pelicula.anio !== this.filtros.anio) {
        return false;
      }

      if (this.filtros.genero && pelicula.genero !== this.filtros.genero) {
        return false;
      }

      if (this.filtros.plataforma && pelicula.plataforma !== this.filtros.plataforma) {
        return false;
      }

      return true;
    });
  }
}
