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
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'buscar',
    loadComponent: () =>
      import('./pages/buscar/buscar.page').then((m) => m.BuscarPage),
  },
  {
    path: 'movie/:id',
    loadComponent: () =>
      import('./pages/movie-detail/movie-detail.page').then((m) => m.MovieDetailPage),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./pages/sobre/sobre.page').then((m) => m.SobrePage),
  },
];