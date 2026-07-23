import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required,
    },

    age: {
      type: Number,
      required,
    },

    educations: {
      type: String,
      required,
    },
    experience: {
      type: String,
      required,
    },

    salary: {
      type: String,
      required,
    },

    inhospitals: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true },
);

export const Doctor = mongoose.Schema("Doctor", doctorSchema);
