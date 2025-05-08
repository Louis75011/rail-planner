const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  number: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: String, required: true },
  status: {
    type: String,
    enum: ['à quai', 'en circulation', 'en retard'],
    default: 'à quai'
  },
  wagons: { type: Number, required: true, min: 1 }
}, { timestamps: true });

module.exports = mongoose.model('Train', trainSchema);
