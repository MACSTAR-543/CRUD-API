# 🏪 Inventory / Store CRUD API

A simple RESTful API for managing store inventory — including **Products**, **Suppliers**, and **Orders**.

---

## 🌐 Base URL
https://crud-api-4-cncd.onrender.com

## Local base URL
http://localhost:3000

---

## 📘 Tech Stack

* Node.js

* Express.js

* MongoDB Atlas

* Mongoose

* Postman (for API testing)

## 📦 Endpoints

### 🧾 Products

| Method | Endpoint              | Description              | Status           |
|--------|------------------------|---------------------------|----------------|
| GET    | `/api/products`        | Get all products          | 200 OK         |
| GET    | `/api/products/:id`    | Get a product by ID       | 200 / 404      |
| POST   | `/api/products`        | Create new product        | 201 Created    |
| PUT    | `/api/products/:id`    | Update a product by ID    | 200 OK / 400   |
| DELETE | `/api/products/:id`    | Delete a product by ID    | 200 / 404      |

---

### 🏢 Suppliers

| Method | Endpoint              | Description              | Status           |
|--------|------------------------|---------------------------|----------------|
| GET    | `/api/suppliers`       | Get all suppliers         | 200 OK         |
| GET    | `/api/suppliers/:id`   | Get a supplier by ID      | 200 / 404      |
| POST   | `/api/suppliers`       | Create new supplier       | 201 Created    |
| PUT    | `/api/suppliers/:id`   | Update a supplier by ID   | 200 OK / 400   |
| DELETE | `/api/suppliers/:id`   | Delete a supplier by ID   | 200 / 404      |

---

### 📦 Orders

| Method | Endpoint              | Description              |  Status          |
|--------|------------------------|---------------------------|----------------|
| GET    | `/api/orders`          | Get all orders            | 200 OK         |
| GET    | `/api/orders/:id`      | Get an order by ID        | 200 / 404      |
| POST   | `/api/orders`          | Create new order          | 201 Created    |
| PUT    | `/api/orders/:id`      | Update an order by ID     | 200 OK / 400   |
| DELETE | `/api/orders/:id`      | Delete an order by ID     | 200 / 404      |

---

## 🧪 Sample Requests

### ➕ Create Product
`POST /api/products`

```json
{

  "name": "Shirt",
  "sku": "CLO-005",
  "price": 499
}

---

### ➕ Create Supplier
`POST /api/suppliers`

```json

{
 "name": "ABC Supplies",
 "contact": "0917123456"
}

---
### ➕ Create Order
`POST /api/orders`

```json

{
  "productId": "6711a3f25cfd14d3e1c2f9c1",
  "qty": 5,
  "price": 2500,
  "status": "processing"
}



---

