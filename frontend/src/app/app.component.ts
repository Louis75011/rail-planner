import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainFormComponent } from './components/train-form/train-form.component';
import { TrainListComponent } from './components/train-list/train-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TrainFormComponent,
    TrainListComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rail-planner';
  refreshCounter = 0;

  onTrainAdded(): void {
    this.refreshCounter++; // ⚡ Trigge le rechargement de la liste
  }
}
