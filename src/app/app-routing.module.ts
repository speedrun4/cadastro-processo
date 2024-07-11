import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoListComponent } from './processo-list/processo-list.component';
import { ProcessoDetailComponent } from './processo-detail/processo-detail.component';

const routes: Routes = [
  { path: 'processos', component: ProcessoListComponent },
  { path: 'processos/:id', component: ProcessoDetailComponent },
  { path: '', redirectTo: '/processos', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
