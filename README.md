# MongoDB Fundamentals Assignment

This repository contains my solutions for the **Week 1: MongoDB – Data Layer Fundamentals and Advanced Techniques** assignment.

## Overview

This assignment demonstrates the following MongoDB concepts:
- Database and collection setup
- Inserting sample book data
- Performing CRUD operations
- Writing advanced queries (filtering, projection, sorting, pagination)
- Using aggregation pipelines for data analysis
- Implementing and analyzing indexes for performance

## Setup Instructions

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community) installed locally **OR** a [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster
- [MongoDB Shell (mongosh)](https://www.mongodb.com/try/download/shell) or [MongoDB Compass](https://www.mongodb.com/products/compass)

### 2. Clone the Repository

```sh
git clone <your-repo-url>
cd week-1-mongodb-fundamentals-assignment-YandaDev
```

### 3. Populate the Database

1. Ensure your MongoDB server is running locally (default: `mongodb://localhost:27017`) or update the connection string in `insert_books.js` if using Atlas.
2. Run the data insertion script:

```sh
node insert_books.js
```

This will create a `plp_bookstore` database and insert sample book documents into the `books` collection.

### 4. Run MongoDB Queries

- Open `queries.js` to view all required MongoDB queries for the assignment.
- You can copy and paste these queries into `mongosh` or use them in MongoDB Compass.

## Files

- `insert_books.js` – Script to insert sample book data into MongoDB.
- `queries.js` – Contains all required MongoDB queries (CRUD, advanced queries, aggregation, indexing).
- `Week1-Assignment.md` – Assignment instructions and requirements.
- `README.md`

## Example Usage

After running `insert_books.js`, you can try queries such as:

```js
// Find all books in the 'Fiction' genre
db.books.find({ genre: "Fiction" })

// Find books published after 1950
db.books.find({ published_year: { $gt: 1950 } })

// Calculate the average price of books by genre
db.books.aggregate([{ $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }])
```

See `queries.js` for the full list.

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
