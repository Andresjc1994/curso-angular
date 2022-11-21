import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,

  },

  {
    path: 'home' ,
    component:HomeComponent,

  },

  {
    path: 'settings',
    loadChildren: () =>
    import('./settings/settings.module').then((m) => m.SettingsModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
