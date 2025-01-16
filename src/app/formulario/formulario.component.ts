import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidacionService } from '../validacion.service';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Importar módulos necesarios
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup<{
    placa: FormControl<string | null>;
    fecha: FormControl<string | null>;
    hora: FormControl<string | null>;
  }>;
  respuesta: any | null = null;
  error: string | null = null;

  constructor(private fb: FormBuilder, private validacionService: ValidacionService) {
    this.formulario = this.fb.group({
      placa: ['', [Validators.required, Validators.pattern('^[A-Z]{3}-\\d{3,4}$')]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  enviarConsulta() {
    if (this.formulario.invalid) {
      this.error = 'Por favor, ingresa datos válidos.';
      return;
    }

    const placa = this.formulario.value.placa!;
    const fechaHora = `${this.formulario.value.fecha}T${this.formulario.value.hora}`;

    this.validacionService.validarPlaca(placa, fechaHora).subscribe({
      next: (response) => {
        this.respuesta = response;
        this.error = null;
      },
      error: (err) => {
        this.respuesta = null;
        this.error = err.error.placa || 'Ocurrió un error al procesar la solicitud.';
      }
    });
  }
}
