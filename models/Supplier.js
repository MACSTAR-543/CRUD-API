const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Supplier', supplierSchema);
