const Patient = require('../models/patientModel');

class PatientService {
  async registerPatient(patientData) {
    try {
      const newPatient = new Patient(patientData);
      const savedPatient = await newPatient.save();
      return { patientId: savedPatient._id, message: 'Patient registered successfully.' };
    } catch (error) {
      throw new Error('Error registering patient: ' + error.message);
    }
  }

  async getAllPatients() {
    try {
      const patients = await Patient.find({}, 'patientId surname otherNames gender phoneNumber');
      return patients;
    } catch (error) {
      throw new Error('Error fetching patients: ' + error.message);
    }
  }

  async getPatientById(patientId) {
    try {
      const patient = await Patient.findById(patientId);
      if (!patient) {
        throw new Error('Patient not found.');
      }
      return patient;
    } catch (error) {
      throw new Error('Error fetching patient: ' + error.message);
    }
  }

  async updatePatient(patientId, updatedData) {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(patientId, updatedData, { new: true });
      if (!updatedPatient) {
        throw new Error('Patient not found.');
      }
      return { message: 'Patient information updated successfully.' };
    } catch (error) {
      throw new Error('Error updating patient: ' + error.message);
    }
  }

  async deletePatient(patientId) {
    try {
      const deletedPatient = await Patient.findByIdAndDelete(patientId);
      if (!deletedPatient) {
        throw new Error('Patient not found.');
      }
      return { message: 'Patient deleted successfully.' };
    } catch (error) {
      throw new Error('Error deleting patient: ' + error.message);
    }
  }
}

module.exports = new PatientService();
