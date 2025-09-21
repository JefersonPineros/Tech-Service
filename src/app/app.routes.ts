import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'shared',
    pathMatch: 'full',
  },
  {
    path: 'shared',
    loadComponent: () => import('./shared/shared').then((c) => c.Shared),
    children: [
      {
        path: '',
        redirectTo: 'views',
        pathMatch: 'full',
      },
      {
        path: 'views',
        loadComponent: () => import('./shared/views/views').then((c) => c.Views),
        children: [
          {
            path: '',
            redirectTo: 'auth',
            pathMatch: 'full',
          },
          {
            path: 'auth',
            loadComponent: () => import('./shared/views/auth/auth').then((c) => c.Auth),
          },
          {
            path: 'home',
            loadComponent: () => import('./shared/views/home/home').then((c) => c.Home),
            children: [
              {
                path: '',
                redirectTo: 'page-init',
                pathMatch: 'full',
              },
              {
                path: 'page-init',
                loadComponent: () =>
                  import('./shared/views/home/page-init/page-init').then((c) => c.PageInit),
              },
              {
                path: 'services',
                loadComponent: () =>
                  import('./shared/views/home/services/services').then((c) => c.Services),
              },
              {
                path: 'admin-page',
                loadComponent: () =>
                  import('./shared/views/home/admin-page/admin-page').then((c) => c.AdminPage),
              },
            ],
          },
        ],
      },
    ],
  },
];
