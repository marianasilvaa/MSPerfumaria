import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvonComponent } from './pages/avon/avon.component';
import { BoticarioComponent } from './pages/boticario/boticario.component';
import { EudoraComponent } from './pages/eudora/eudora.component';
import { NaturaComponent } from './pages/natura/natura.component';
import { PacoRabanneComponent } from './pages/paco-rabanne/paco-rabanne.component';

const routes: Routes = [
  {path:"avon", component: AvonComponent},
  {path:"eudora", component: EudoraComponent},
  {path:"natura", component: NaturaComponent},
  {path:"boticario", component: BoticarioComponent},
  {path:"paco-rabanne", component: PacoRabanneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
