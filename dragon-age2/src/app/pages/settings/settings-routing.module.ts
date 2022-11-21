import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCreateComponent } from './character-create/character-create.component';
import { SettingsModule } from './settings.module';

const routes: Routes = [

{
  path: '',
  component:CharacterCreateComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
