# CRUD-API
# 🏪 Inventory / Store CRUD API

A simple RESTful API for managing store inventory — including **Products**, **Suppliers**, and **Orders** — built with **Node.js**, **Express**, and **MongoDB Atlas**.  

## 🌐 Base URL



## 📦 Endpoints

### 🧾 Products

| Method | Endpoint               | Description              | Sample Status |
|--------|-------------------------|---------------------------|---------------|
| GET    | /api/products           | Get all products         | 200 OK        |
| GET    | /api/products/:id       | Get a product by ID      | 200 / 404     |
| POST   | /api/products           | Create new product       | 201 Created   |
| PUT    | /api/products/:id       | Update a product by ID   | 200 OK        |
| DELETE | /api/products/:id       | Delete a product by ID   | 200 / 404     |

### 🏢 Suppliers

| Method | Endpoint               | Description                | Sample Status |
|--------|-------------------------|-----------------------------|---------------|
| GET    | /api/suppliers          | Get all suppliers          | 200 OK        |
| GET    | /api/suppliers/:id      | Get a supplier by ID       | 200 / 404     |
| POST   | /api/suppliers          | Create new supplier        | 201 Created   |
| PUT    | /api/suppliers/:id      | Update a supplier by ID    | 200 OK        |
| DELETE | /api/suppliers/:id      | Delete a supplier by ID    | 200 / 404     |

### 🧾 Orders

| Method | Endpoint               | Description                | Sample Status |
|--------|-------------------------|-----------------------------|---------------|
| GET    | /api/orders            | Get all orders             | 200 OK        |
| GET    | /api/orders/:id        | Get an order by ID         | 200 / 404     |
| POST   | /api/orders           | Create new order          | 201 Created   |
| PUT    | /api/orders/:id       | Update an order by ID     | 200 OK        |
| DELETE | /api/orders/:id       | Delete an order by ID     | 200 / 404     |

---

## 🧪 Sample Requests

### ➕ Create Product
`POST /api/products`

```json
{
  "sku": "BK-001",
  "name": "JavaScript Guide",
  "price": 500,
  "stock": 20
}

###➕ Create Supplier
'POST /api/suppliers'

## 🗝️ Environment Variables (.env)

| Key         | Description                     | Example Value (Redacted)                                  |
|-------------|----------------------------------|-----------------------------------------------------------|
| PORT        | Server port number              | 4000                                                      |
| MONGO_URI   | MongoDB Atlas connection string | mongodb+srv://<username>:<password>@inventory.xuwjjj7...  |


