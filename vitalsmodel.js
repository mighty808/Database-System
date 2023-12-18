const mongoose = require('mongoose');

const vitalsSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  bloodPressure: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
  pulse: {
    type: String,
    required: true,
  },
  spO2: {
    type: String,
    required: true,
  },
});

const Vitals = mongoose.model('Vitals', vitalsSchema);

module.exports = Vitals;