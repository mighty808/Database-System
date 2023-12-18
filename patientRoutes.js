const express = require('express');
const patientController = require('../controllers/patientController');

const router = express.Router();

// Define patient-related routes
router.post('/patients', patientController.registerPatient);
router.get('/patients', patientController.getAllPatients);
// ... other patient routes

module.exports = router;
