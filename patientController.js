const patientService = require('../services/patientService');

class PatientController {
  async registerPatient(req, res) {
    try {
      const patientData = req.body;
      const result = await patientService.registerPatient(patientData);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllPatients(req, res) {
    try {
      const patients = await patientService.getAllPatients();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPatientById(req, res) {
    try {
      const patientId = req.params.patientId;
      const patient = await patientService.getPatientById(patientId);
      res.status(200).json(patient);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async updatePatient(req, res) {
    try {
      const patientId = req.params.patientId;
      const updatedData = req.body;
      const result = await patientService.updatePatient(patientId, updatedData);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async deletePatient(req, res) {
    try {
      const patientId = req.params.patientId;
      const result = await patientService.deletePatient(patientId);
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new PatientController();
