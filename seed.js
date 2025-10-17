require('dotenv').config();
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const Product = require('./models/Product');
const Supplier = require('./models/Supplier');
const Order = require('./models/Order');

const seed = async () => {
  try {
    await connectDB();
    console.log('Seeding database...');

    // Clear old data
    await Product.deleteMany({});
    await Supplier.deleteMany({});
    await Order.deleteMany({});

    // 🏢 Suppliers
    const suppliers = await Supplier.insertMany([
      { name: 'ACME Supplies', contact: 'acme@example.com' },
      { name: 'MotorParts Inc', contact: 'sales@motorparts.com' },
      { name: 'TrendyWear Co.', contact: 'trendywear@example.com' },
      { name: 'BookWorld Publishers', contact: 'books@example.com' },
      { name: 'FreshBites Supply', contact: 'freshbites@example.com' },
      { name: 'TechNova Distributors', contact: 'tech@technova.com' }
    ]);

    // 🧰 Auto Shop Products (original)
    const autoProducts = [
      { sku: 'SKU-001', name: 'Oil Filter', price: 8.5, stock: 100, category: 'Auto Parts' },
      { sku: 'SKU-002', name: 'Engine Oil 1L', price: 12.0, stock: 200, category: 'Auto Parts' },
      { sku: 'SKU-003', name: 'Brake Pads', price: 35.0, stock: 50, category: 'Auto Parts' }
    ];

    // 👕 Clothing Store Products
    const clothingProducts = [
      { sku: 'CLO-001', name: 'T-Shirt', price: 15.99, stock: 120, category: 'Clothing' },
      { sku: 'CLO-002', name: 'Denim Jeans', price: 45.5, stock: 80, category: 'Clothing' },
      { sku: 'CLO-003', name: 'Sneakers', price: 60, stock: 50, category: 'Clothing' }
    ];

    // 📚 Bookstore Products
    const bookProducts = [
      { sku: 'BOOK-001', name: 'The Great Gatsby', price: 12, stock: 30, category: 'Books' },
      { sku: 'BOOK-002', name: 'To Kill a Mockingbird', price: 10.5, stock: 40, category: 'Books' },
      { sku: 'BOOK-003', name: '1984', price: 11, stock: 25, category: 'Books' }
    ];

    // 🍔 Food Store Products
    const foodProducts = [
      { sku: 'FOOD-001', name: 'Burger Patty (pack of 4)', price: 8, stock: 60, category: 'Food' },
      { sku: 'FOOD-002', name: 'French Fries (1kg)', price: 5.5, stock: 90, category: 'Food' },
      { sku: 'FOOD-003', name: 'Cheddar Cheese (block)', price: 7.75, stock: 40, category: 'Food' }
    ];

    // 💻 Technology Gadgets
    const techProducts = [
      { sku: 'TECH-001', name: 'Smartphone X12', price: 699, stock: 25, category: 'Technology' },
      { sku: 'TECH-002', name: 'Laptop Pro 15"', price: 1200, stock: 15, category: 'Technology' },
      { sku: 'TECH-003', name: 'Wireless Headphones', price: 150, stock: 40, category: 'Technology' }
    ];

    // Combine all product categories
    const products = await Product.insertMany([
      ...autoProducts,
      ...clothingProducts,
      ...bookProducts,
      ...foodProducts,
      ...techProducts
    ]);

    // 🧾 Orders
    const orders = await Order.insertMany([
      {
        items: [
          { productId: products[0]._id, qty: 10, price: products[0].price },
          { productId: products[1]._id, qty: 5, price: products[1].price }
        ],
        supplierId: suppliers[0]._id,
        status: 'received'
      },
      {
        items: [
          { productId: products[9]._id, qty: 2, price: products[9].price },
          { productId: products[12]._id, qty: 3, price: products[12].price }
        ],
        supplierId: suppliers[5]._id,
        status: 'pending'
      }
    ]);

    console.log('✅ Seed complete');
    console.log({
      productsCount: products.length,
      suppliersCount: suppliers.length,
      ordersCount: orders.length
    });

    mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
};

seed();

