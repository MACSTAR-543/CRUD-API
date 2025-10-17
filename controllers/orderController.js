const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    // Optionally, decrement stock for each item if order means sale; or increment if it's a received order.
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({}).populate('items.productId').populate('supplierId');
  res.json(orders);
};

exports.getOrder = async (req, res) => {
  const o = await Order.findById(req.params.id).populate('items.productId').populate('supplierId');
  if (!o) return res.status(404).json({ error: 'Order not found' });
  res.json(o);
};

exports.updateOrder = async (req, res) => {
  try {
    const o = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!o) return res.status(404).json({ error: 'Order not found' });
    res.json(o);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteOrder = async (req, res) => {
  const o = await Order.findByIdAndDelete(req.params.id);
  if (!o) return res.status(404).json({ error: 'Order not found' });
  res.json({ message: 'Deleted', order: o });
};
