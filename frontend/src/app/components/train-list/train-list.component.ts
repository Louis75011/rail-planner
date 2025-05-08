import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainService, Train } from '../../services/train.service';

@Component({
  selector: 'app-train-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent implements OnInit, OnChanges {
  @Input() refreshTrigger: number = 0;
  trains: Train[] = [];

  constructor(private trainService: TrainService) {}

  ngOnInit(): void {
    this.loadTrains();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['refreshTrigger']) {
      this.loadTrains(); // ✅ Recharge dès qu’un ajout est fait
    }
  }

  loadTrains(): void {
    this.trainService.getTrains().subscribe({
      next: (data: Train[]) => this.trains = data,
      error: (err: any) => console.error('❌ Erreur chargement trains :', err)
    });
  }
}
