const mongoose = require('mongoose');

// Base Schema with common fields
const baseSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Example model
const ExampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}).add(baseSchema);

// Add more models here
// Example: const User = mongoose.model('User', UserSchema);

module.exports = {
  Example: mongoose.model('Example', ExampleSchema)
  // Export other models here
}; 