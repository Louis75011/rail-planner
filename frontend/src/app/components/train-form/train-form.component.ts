import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrainService, Train } from '../../services/train.service';

@Component({
  selector: 'app-train-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './train-form.component.html',
  styleUrls: ['./train-form.component.scss']
})
export class TrainFormComponent {
  train: Train = {
    number: '',
    destination: '',
    departureTime: '',
    status: 'à quai',
    wagons: 8
  };

  // ✅ Ajout ici pour déclencher le rafraîchissement côté parent
  @Output() trainAdded = new EventEmitter<void>();

  constructor(private trainService: TrainService) {}

  submitForm(): void {
    if (!this.train.number || !this.train.destination || !this.train.departureTime) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    console.log('📝 Formulaire soumis :', this.train);

    this.trainService.addTrain(this.train).subscribe({
      next: () => {
        alert('✅ Train ajouté avec succès !');
        this.train = {
          number: '',
          destination: '',
          departureTime: '',
          status: 'à quai',
          wagons: 8
        };
        this.trainAdded.emit(); // ✅ Événement déclenché
      },
      error: (err) => alert('❌ Erreur lors de l’ajout : ' + err.message)
    });
  }
}
