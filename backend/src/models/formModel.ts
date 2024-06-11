const mongoose = require('mongoose');

const testFormSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  isMarried: { type: Boolean, default: false },
  country: { type: String, required: true },
  state: { type: String, required: true },
  dob: { type: Date, required: true }
},{timeStamps: true});

export const TestForm = mongoose.model('TestForm', testFormSchema);
