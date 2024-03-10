# Ecommerce API

This API allows you to manage a product inventory, including storing product names and quantities, retrieving a list of all products, deleting a product by its ID, and updating a product's quantity. It is built using Node.js and MongoDB.

## Endpoints

### 1. Store a Product

- **URL:** `/products/create`
- **Method:** POST
- **Request Body:**
  ```json
  {
      "name": "Product Name",
      "quantity": 10
  }
  ```
- **Response:** 
  - Status: 201 Created
  - Body: The newly created product object

### 2. Get All Products

- **URL:** `/products`
- **Method:** GET
- **Response:** 
  - Status: 200 OK
  - Body: An array of all product objects

### 3. Delete a Product by ID

- **URL:** `/products/:productId`
- **Method:** DELETE
- **URL Params:** 
  - `productId`: ID of the product to be deleted
- **Response:** 
  - Status: 200 OK
   Body: 
     ```json
  {
      "message": "product deleted"
  }
  ```

### 4. Update a Product's Quantity by ID

- **URL:** `/products/:productId/update_quantity/?number=10`
- **Method:** PUT
- **URL Params:** 
  - `productId`: ID of the product to be updated
- **Query Params:
  - quantity: New quantity value**
- **Response:** 
  - Status: 200 OK
  - Body: The updated product object

## Setup

1. Install Node.js and MongoDB if not already installed.
2. Clone this repository.
3. Navigate to the project directory.
4. Install dependencies:
   ```
   npm install
   ```
5. Configure MongoDB connection in `config.js`.
6. Start the server:
   ```
   npm start
   ```
7. You can now access the API endpoints described above.

## Dependencies

- `express`: For handling HTTP requests.
- `mongoose`: For interacting with MongoDB.
- `body-parser`: For parsing JSON request bodies.
- `dotenv`: For loading environment variables from a `.env` file.