import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    specialization: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

export const Hospital = mongoose.Schema("Hospital", hospitalSchema);
