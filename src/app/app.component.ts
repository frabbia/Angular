import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponetComponent } from './page/componet/componet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
