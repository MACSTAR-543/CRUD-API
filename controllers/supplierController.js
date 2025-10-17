const Supplier = require('../models/Supplier');

exports.createSupplier = async (req, res) => {
  try {
    const s = await Supplier.create(req.body);
    res.status(201).json(s);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSuppliers = async (req, res) => {
  const list = await Supplier.find({});
  res.json(list);
};

exports.getSupplier = async (req, res) => {
  const s = await Supplier.findById(req.params.id);
  if (!s) return res.status(404).json({ error: 'Supplier not found' });
  res.json(s);
};

exports.updateSupplier = async (req, res) => {
  try {
    const s = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!s) return res.status(404).json({ error: 'Supplier not found' });
    res.json(s);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSupplier = async (req, res) => {
  const s = await Supplier.findByIdAndDelete(req.params.id);
  if (!s) return res.status(404).json({ error: 'Supplier not found' });
  res.json({ message: 'Deleted', supplier: s });
};
