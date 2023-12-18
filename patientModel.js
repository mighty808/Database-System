const mongoose = require('mongoose')
const patientSchema = mongoose.Schema(
    {
        patientId:{
            type: Number,
            required: [true]
        },

        surname:{
            type: String,
            required: [true, "Enter surnmae"]
        },

        otherNames:{
            type: String,
            required: [true, "Enter othernames"]
        },

        gender:{
            type: String,
            required: [true, "Enter your gender"]
        },
        

        phoneNumber:{
            type: Number,
            required: [true, "Enter your gender"],
        },

        residentialAddress:{
            type: String,
            required: false,
        },

        emergencyName:{
            type: String,
            required: [true, "Enter Emergency Name"]
        },

        emergencyContact:{
            type: Number,
            required: [true, "Enter emergency number"],
        },

        relationshipWithPatients:{
            type: String,
            required: true,
        },

    },
    
        {
            timestaps: true,
        }
)

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;