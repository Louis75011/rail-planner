import { Component } from '@angular/core';
import { TrainService, Train } from '../../services/train.service';
import { FormsModule } from '@angular/forms';

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

  constructor(private trainService: TrainService) { }

  submitForm(): void {
    console.log('📝 Formulaire soumis :', this.train); // 👈 Debug
    
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
      },
      error: (err) => alert('❌ Erreur lors de l’ajout : ' + err.message)
    });
  }
}
