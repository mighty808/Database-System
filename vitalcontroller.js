const Vital = require('../models/vitalModel');

const vitalController = {
  // Controller function to get patient vitals
  getVitals: async (req, res) => {
    try {
      const { patientId } = req.params;

      const vitals = await Vital.find({ patientId });
      res.json(vitals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Other vital-related controller functions can be added here as needed
};

module.exports = vitalController;