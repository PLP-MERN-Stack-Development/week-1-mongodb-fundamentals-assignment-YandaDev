// --- Task 2: Basic CRUD Operations ---

// Find all books in the 'Gothic Fiction' genre
db.books.find({genre:"Gothic Fiction"})

// Find books published after the year 1847
db.books.find({published_year:{$gt:1847}})

// Find all books by author 'Harper Lee'
db.books.find({author:"Harper Lee"})

// Update the price of the book titled '1984' from 10.99 to 12.10
db.books.updateOne({title:"1984"}, {$set:{price:12.10}})

// Delete the book titled 'Brave New World'
db.books.deleteOne({title:"Brave New World"})

// --- Task 3: Advanced Queries ---
// Find books that are both in stock and published after 2010
db.books.find({in_stock:true},{published_year:{$gt:2010}})

// Use projection to return only the title, author, and price fields
db.books.find({},{title:true, author:true, price:true, _id:false})

// Sort books by price in ascending order
db.books.find().sort({price: 1})

// Sort books by price in descending order
db.books.find().sort({price: -1})

// Implement pagination: skip the first 5 books and limit the result to the next 5 books
db.books.find().limit(5).skip(5)

// --- Task 4: Aggregation Pipeline ---

// Calculate the average price of books by genre
db.books.aggregate([{ $group: {_id: "$genre", avgPrice: {$avg:"$price"}}}])

// Find the author with the most books in the collection
db.books.aggregate([{ $group: {_id:"$author", count: {$sum:1}}}, {$sort:{count: -1}}, {$limit: 1}])

// Group books by their publication decade and count the number of books in each decade
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $toString: { $multiply: [ { $floor: { $divide: ["$published_year", 10] } }, 10 ] } },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// --- Task 5: Indexing ---

// Create an index on the `title` field to speed up searches by book title
db.books.createIndex({title:1})

// Create a compound index on `author` and `published_year` to optimize queries filtering by both fields
db.books.createIndex({author:1, published_year:1})

// Use the explain() method to show query execution stats and demonstrate the performance benefit of indexes
db.books.find({title:"1984"}).explain("executionStats")