import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';  // Importe o componente
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  
  { path: '', component: SidebarComponent, children: [
  ]},
  { path: 'home', component: HomeComponent },  // Rota padrão para a página inicial
  // Outras rotas, se necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
