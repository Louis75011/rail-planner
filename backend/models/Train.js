const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  number: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: String, required: true },
  status: {
    type: String,
    enum: ['à quai', 'en retard', 'en circulation'],
    default: 'à quai'
  },
  wagons: { type: Number, default: 8 }
}, { timestamps: true });

module.exports = mongoose.model('Train', trainSchema);
