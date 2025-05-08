const mongoose = require('mongoose');
require('dotenv').config();
const Train = require('./models/Train');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Train.deleteMany(); // Réinitialise la collection
    await Train.insertMany([
      {
        number: 'TGV 8430',
        destination: 'Paris Gare de Lyon',
        departureTime: '12:45',
        status: 'à quai',
        wagons: 10
      },
      {
        number: 'TER 2167',
        destination: 'Lille Flandres',
        departureTime: '15:10',
        status: 'en circulation',
        wagons: 6
      },
      {
        number: 'Intercités 3751',
        destination: 'Bordeaux',
        departureTime: '18:20',
        status: 'en retard',
        wagons: 8
      },
      {
        number: 'RER B 9583',
        destination: 'Saint-Rémy-lès-Chevreuse',
        departureTime: '17:05',
        status: 'à quai',
        wagons: 4
      }
    ]);
    console.log('🚂 Données de test injectées avec succès !');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Erreur MongoDB :', err);
    process.exit(1);
  });
