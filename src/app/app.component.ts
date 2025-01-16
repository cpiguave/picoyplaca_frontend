import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true, // Marca este componente como standalone
  imports: [RouterModule], // Importa RouterModule para usar router-outlet
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-picoyplaca';
}
