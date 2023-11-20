import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { VeiculoListComponent } from './components/veiculo/veiculo-list/veiculo-list/veiculo-list.component';

const routes: Routes = [

  { path: '', component: SidebarComponent, children: [
  ]},
  { path: 'home', component: HomeComponent },
  { path: 'veiculo-list', component: VeiculoListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
