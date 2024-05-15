import { Component } from '@angular/core';

// este decorador solo es para convertir la clase en un modulo
// llamado app-root y que esta ligado a otros dos archivos para
// su vista HTML y su hoja de estilo.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// Aqui empieza la clase
export class AppComponent {
  title = 'FirstProyect';
}

