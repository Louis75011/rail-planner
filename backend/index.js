const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/trains', require('./routes/Train'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 MongoDB connecté'))
  .catch(err => console.error('🔴 Erreur MongoDB :', err.message));

app.use('/api/trains', require('./routes/Train'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚂 RailPlanner API sur le port ${PORT}`));