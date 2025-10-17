const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/supplierController');

router.post('/', ctrl.createSupplier);
router.get('/', ctrl.getSuppliers);
router.get('/:id', ctrl.getSupplier);
router.put('/:id', ctrl.updateSupplier);
router.delete('/:id', ctrl.deleteSupplier);

module.exports = router;
