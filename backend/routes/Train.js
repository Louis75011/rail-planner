const express = require('express');
const router = express.Router();
const Train = require('../models/Train');

// GET all trains
router.get('/', async (req, res) => {
  try {
    const trains = await Train.find().sort({ departureTime: 1 });
    res.json(trains);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new train
router.post('/', async (req, res) => {
  try {
    const train = new Train(req.body);
    const savedTrain = await train.save();
    res.status(201).json(savedTrain);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;