import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  veiculoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.veiculoForm = this.fb.group({
      marca: [''],
      modelo: [''],
      placa: ['']
    });
  }

  submitForm() {
    // Aqui você pode acessar os valores do formulário
    const formData = this.veiculoForm.value;
    console.log(formData);

    // Aqui você pode enviar os dados para o servidor ou executar a lógica desejada.
  }
}
