import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('@estudo-nx/modules/products').then((m) => m.ProductsModule),
  },
  {
    path: 'ordens',
    loadChildren: () =>
      import('@estudo-nx/modules/orders').then((m) => m.OrdersModule),
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('@modules/users').then((m) => m.UsersComponent),
  }
];
