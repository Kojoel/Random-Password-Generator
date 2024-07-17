import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PgCardComponent } from './pg-card/pg-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PgCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RPG';
}
