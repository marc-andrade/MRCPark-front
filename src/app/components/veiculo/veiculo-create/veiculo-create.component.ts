import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent implements OnInit {
  veiculoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.veiculoForm = this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      placa: ['', Validators.required]
    });
  }

  submitForm() {
    // Aqui você pode acessar os valores do formulário
    const formData = this.veiculoForm.value;
    console.log(formData);

    // Aqui você pode enviar os dados para o servidor ou executar a lógica desejada.
  }
}