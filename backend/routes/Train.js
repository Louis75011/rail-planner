const express = require('express');
const router = express.Router();
const Train = require('../models/Train');

// GET all trains
router.get('/', async (req, res) => {
  try {
    console.log('📩 Corps reçu :', req.body);
    const trains = await Train.find().sort({ departureTime: 1 });
    res.json(trains);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new train
router.post('/', async (req, res) => {
    console.log('📩 Reçu du front :', req.body); // ⬅️ LOG utile
  
    try {
      const train = new Train(req.body);
  
      const savedTrain = await train.save();
      console.log('✅ Train enregistré :', savedTrain); // ⬅️ Confirmation
  
      res.status(201).json(savedTrain);
    } catch (err) {
      console.error('❌ Erreur backend :', err.message); // ⬅️ Log erreur
      res.status(400).json({ error: err.message });
    }
  });

module.exports = router;