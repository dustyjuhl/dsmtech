import { Component } from '@angular/core';
import { Navigation } from './navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
