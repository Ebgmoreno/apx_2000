import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // Importa Subject

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  equipos: any[] = [];
  equiposSubject = new Subject<any[]>(); // Crea un Subject

  agregarEquipo(equipo: any) {
    this.equipos.push(equipo);
    this.equiposSubject.next(this.equipos); // Emite el nuevo array de equipos
  }

  obtenerEquipos() {
    return this.equipos;
  }

  obtenerEquiposObservable() { // Nuevo método para obtener el Observable
    return this.equiposSubject.asObservable();
  }
}