import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // O ReactiveFormsModule si lo prefieres

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa los módulos aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent { 
  usuario = ''; // Declara la variable usuario
  contrasena = ''; // Declara la variable contrasena

onSubmit() {
  // Aquí puedes agregar la lógica para manejar el envío del formulario
  console.log('Usuario:', this.usuario);
  console.log('Contraseña:', this.contrasena);
}
}