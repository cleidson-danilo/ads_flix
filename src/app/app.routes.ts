import type { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'buscar',
    loadComponent: () =>
      import('./components/buscar/buscar.page').then((m) => m.BuscarPage),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-detail/movie-detail.page').then((m) => m.MovieDetailPage),
  },
];