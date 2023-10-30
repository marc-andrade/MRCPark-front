import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { VeiculoCreateComponent } from './components/veiculo/veiculo-create/veiculo-create.component'; 

import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe FormsModule e ReactiveFormsModule se ainda não tiver feito isso
import { MatInputModule } from '@angular/material/input'; // Importe o MatInputModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { VeiculoListComponent } from './components/veiculo/veiculo-list/veiculo-list/veiculo-list.component';
import { VeiculoUpdateComponent } from './components/veiculo/veiculo-update/veiculo-update/veiculo-update.component';// Importe o MatFormFieldModule


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    VeiculoCreateComponent,
    VeiculoListComponent,
    VeiculoUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
