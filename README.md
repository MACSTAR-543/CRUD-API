# 🏪 Inventory / Store CRUD API

A simple RESTful API for managing store inventory — including **Products**, **Suppliers**, and **Orders** — built with **Node.js**, **Express**, and **MongoDB Atlas**.

---

## 🌐 Base URL
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

| Method | Endpoint              | Description              | Sample Status |
|--------|------------------------|---------------------------|----------------|
| GET    | `/api/products`        | Get all products          | 200 OK         |
| GET    | `/api/products/:id`    | Get a product by ID       | 200 / 404      |
| POST   | `/api/products`        | Create new product        | 201 Created    |
| PUT    | `/api/products/:id`    | Update a product by ID    | 200 OK / 400   |
| DELETE | `/api/products/:id`    | Delete a product by ID    | 200 / 404      |

---

### 🏢 Suppliers

| Method | Endpoint              | Description              | Sample Status |
|--------|------------------------|---------------------------|----------------|
| GET    | `/api/suppliers`       | Get all suppliers         | 200 OK         |
| GET    | `/api/suppliers/:id`   | Get a supplier by ID      | 200 / 404      |
| POST   | `/api/suppliers`       | Create new supplier       | 201 Created    |
| PUT    | `/api/suppliers/:id`   | Update a supplier by ID   | 200 OK / 400   |
| DELETE | `/api/suppliers/:id`   | Delete a supplier by ID   | 200 / 404      |

---

### 📦 Orders

| Method | Endpoint              | Description              | Sample Status |
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


### ➕ Create Supplier
`POST /api/suppliers`

```json

{
 "name": "ABC Supplies",
 "contact": "0917123456"
}


### ➕ Create Order
`POST /api/orders`

```json

{
    "items": [
        {
            "productId": "68f23482e8acaed8e337ac06",
            "qty": 3,
            "price": 10.5,
            "_id": "68f2ec97b97576d2e865a99f"
        },
        {
            "productId": "68f1b7ed0f3c8de9ab8a8182",
            "qty": 1,
            "price": 50,
            "_id": "68f2ec97b97576d2e865a9a0"
        }
    ],
    "status": "pending",
    "_id": "68f2ec97b97576d2e865a99e",
    "createdAt": "2025-10-18T01:25:43.765Z",
    "updatedAt": "2025-10-18T01:25:43.765Z",
    "__v": 0
}


---

### 🗝️ Environment Variables (.env)

| Key         | Description                     |                       Redacted                            |
|-------------|---------------------------------|-----------------------------------------------------------|
| PORT        | Server port number              |              3000                                         |
| MONGO_URI   | MongoDB Atlas connection string |mongodb+srv://miacabanza0453_db_user:******@inventory.xuwjjj7.mongodb.net/?retryWrites=true&w=majority&appName=inventory  |


