const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  encounterType: {
    type: String,
    enum: ['Emergency', 'OPD', 'SpecialistCare'],
    required: true,
  },
  vitals: {
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spO2: String,
  },
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
