import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export enum RootRoutes {
  LOGIN = 'login',
}

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', //RootRoutes.DASHBOARD,
        loadChildren: () =>
          import('./dashboard/home.module').then((m) => m.HomeModule),
      }
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
