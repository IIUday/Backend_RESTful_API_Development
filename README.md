
# Backend RESTful API

## Description

This project provides a RESTful API to manage plans. The API supports CRUD operations and is designed with a microservices architecture using Node.js and MongoDB.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running locally

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/UdayII/Backend_Restful_Api_Development.git
   ```

2. Navigate to the project directory:
   ```bash
   cd backend-restful-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and set up the database connection string:
   ```
   DB_URI=mongodb://localhost:27017/plans
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. Use Postman or a similar tool to test the API endpoints:
   - `POST /plans` to create a plan
   - `GET /plans` to list all plans
   - `GET /plans/:id` to get a plan by ID
   - `PUT /plans/:id` to update a plan
   - `DELETE /plans/:id` to delete a plan

## License

MIT
