
## ACTICS EXPRESS.js-MONGODB PROJECT
## A simple RESTful API for managing products using **Express.js** and **MongoDB**.

## 🚀 How to Run the Server

### 1. Clone the Repository

```bash
git clone https://github.com/acunetix2/EXPRESS.js-ASSIGNMENT.git
cd actics
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

Create a `.env` file based on `.env.example`

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/Actisdb
API_KEY=your-secure-api-key
```

### 4. Start the Server

#### Development

```bash
npm run dev
```

#### Production

```bash
pnpm start
```
---
## 📦 API Endpoints

### Base URL
```
http://localhost:3000
```

### 🔐 Authentication

All endpoints require a header:

```
X-API-KEY: your-secure-api-key
```

### 📘 Endpoints

#### GET /api/products

* Fetch all products
* Supports query params: `category`, `page`, `limit`, `search`

**Example:**

```
GET /api/products?category=electronics&page=1&limit=5&search=laptop
```

#### GET /api/products/\:id

* Get a specific product by ID

#### POST /api/products

* Create a new product
* Required fields: `name`, `price`, `category`

**Body Example:**

```json
{
  "name": "Laptop",
  "description": "Gaming Laptop",
  "price": 1500,
  "category": "electronics",
  "inStock": true
}
```

#### PUT /api/products/\:id

* Update a product by ID
* Same body fields as POST

#### DELETE /api/products/\:id

* Delete a product by ID

#### GET /api/products/stats

* Get product count grouped by category

---

## ✅ Example Responses

**GET /api/products**

```json
[
  {
    "_id": "abc123",
    "name": "Laptop",
    "price": 1500,
    "category": "electronics",
    "inStock": true,
    "createdAt": "2025-07-12T10:00:00.000Z"
  }
]
```

**Error Response:**

```json
{
  "message": "Unauthorized: API key missing or invalid"
}
```
> You can test all endpoints using **Postman** by importing the API URL and setting the required headers and request body.

---

## 📁 Project Structure

```
Your-Project/
├── middleware/
│   ├── auth.js
│   ├── logger.js
│   ├── validation.js
│   └── errors.js
├── routes/
│   └── routes.js
├── product.js
├── server.js
├── .env.example
├── package.json
└── README.md
```
---
## 👨‍💻 Author
Iddy Chesire
