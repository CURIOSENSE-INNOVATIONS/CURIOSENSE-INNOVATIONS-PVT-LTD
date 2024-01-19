import mongoose from "mongoose";

const physicalGameRegSchema = new mongoose.Schema({
  gametitle: {
    type: String,
    require: true,
    unique: true,
  },

  age: {
    type: Number,
    require: true,
  },

  gender: {
    type: String,
    require: true,
  },

  category: {
    type: String,
    require: true,
  },

  howtoplay: {
    type: String,
    require: true,
  },

  benefitsofplaying: {
    type: String,
    require: true,
  },

  itemsrequied: {
    type: String,
    require: true,
  },

  url: {
    type: String,
    require: true,
  },

  score: {
    type: String,
    require: true,
  },

  level: {
    type: String,
    require: true,
  }
},
{
  timestamps: true,
});

export const PhysicalGameReg = mongoose.model(
  "PhysicalGameReg",
  physicalGameRegSchema
);
