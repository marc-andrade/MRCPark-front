import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Importe o componente

const routes: Routes = [
  { path: 'home', component: HomeComponent },  // Rota padrão para a página inicial
  // Outras rotas, se necessário
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
