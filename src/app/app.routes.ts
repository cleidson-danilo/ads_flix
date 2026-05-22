import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  // ✅ Integrante 7 — Rota dinâmica com parâmetro :id
  // Ao navegar para /detalhes/123, o Angular captura "123" como o parâmetro "id"
  {
    path: 'detalhes/:id',
    loadComponent: () =>
      import('./detalhes/detalhes.page').then((m) => m.DetalhesPage),
  },

  {
    path: 'buscar',
    loadComponent: () => import
    ('./buscar/buscar.page').then( m => m.BuscarPage)
  },
];
