import { Component } from '@angular/core';

@Component({
  selector: 'app-train-list',
  standalone: true,
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent {} // ✅ nom exact exporté

// import { Component } from '@angular/core';
// import { NgForm, FormsModule } from '@angular/forms'; // 👈 ici
// import { TrainService, Train } from '../../services/train.service';

// @Component({
//   selector: 'app-train-list',
//   standalone: true,
//   imports: [FormsModule], // 👈 important
//   templateUrl: './train-list.component.html',
//   styleUrls: ['./train-list.component.scss']
// })
// export class TrainFormComponent {
//   train: Train = {
//     number: '',
//     destination: '',
//     departureTime: '',
//     status: 'à quai',
//     wagons: 8
//   };

//   constructor(private trainService: TrainService) {}

//   submitForm(): void {
//     this.trainService.addTrain(this.train).subscribe({
//       next: () => {
//         alert('✅ Train ajouté !');
//         this.train = {
//           number: '',
//           destination: '',
//           departureTime: '',
//           status: 'à quai',
//           wagons: 8
//         };
//       },
//       error: (err) => alert('❌ Erreur : ' + err.message)
//     });
//   }
// }
