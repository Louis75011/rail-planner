import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { TrainService, Train } from '../../services/train.service';

@Component({
  selector: 'app-train-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent implements OnInit, OnDestroy {
  trains: Train[] = [];
  private sub?: Subscription;

  constructor(private trainService: TrainService) {}

  ngOnInit(): void {
    this.loadTrains();
    this.sub = this.trainService.refresh$.subscribe(() => this.loadTrains());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  loadTrains(): void {
    this.trainService.getTrains().subscribe({
      next: data => {
        console.log('✅ Trains reçus du backend :', data);
        this.trains = data;
      },
      error: err => console.error('❌ Erreur chargement trains :', err)
    });
  }
}
