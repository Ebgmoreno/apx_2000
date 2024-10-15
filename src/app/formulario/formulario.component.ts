import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  radio = {
    grado: '',
    nombreCompleto: '',
    unidad: '',
    serie: '',
    motivo: {
      equipo: false,
      pantalla: false,
      botones: false,
      eliminador: false,
      bateria: false,
      antena: false,
      cargador: false,
      perillas: false
    },
    descripcion: '',
    fechaMinistracion: '',
    nombreRecibe: '',
    fechaRecepcion: '',
    prioridad: 'ordinario'
  };

  constructor(private router: Router) { } 

  limpiarFormulario() {
    this.radio = {
      grado: '',
      nombreCompleto: '',
      unidad: '',
      serie: '',
      motivo: {
        equipo: false,
        pantalla: false,
        botones: false,
        eliminador: false,
        bateria: false,
        antena: false,
        cargador: false,
        perillas: false
      },
      descripcion: '',
      fechaMinistracion: '',
      nombreRecibe: '',
      fechaRecepcion: '',
      prioridad: 'ordinario'
    };
  }

  cerrarSesion() {
    this.router.navigate(['/']); 
  }

  onSubmit() {
   alert('Equipo registrado con éxito!');
  }
  test() {
    console.log("Se hizo clic en el enlace");
  }

}
