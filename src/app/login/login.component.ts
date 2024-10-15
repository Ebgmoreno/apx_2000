import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  contrasena = '';
  mostrarError = false; 

  constructor(private router: Router) { }

  onSubmit() {
    if (this.usuario === 'D1992428' && this.contrasena === 'Moreno21') {
      this.router.navigate(['/formulario']);
    } else {
      this.mostrarError = true; 
    }
  }
}