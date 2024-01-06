What is database ?
----------------

A database is a structured set of data held in a computer, especially one that is accessible in various ways. Databases are used to store, manage, and retrieve information efficiently. 

what all data we can store? e.g.
--------------------
Student information
Banking
flight reservations
social media platform
food orders



Key features of a database
------------------
1.Data Storage
2.Data Retrieval
3.Data Management 
4.Data integrity
5.Security
6.Scalability and Performance
7.Backup and Recovery



What is Data Modeling
-----------------------------

Data modeling is a process used to define and analyze data requirements needed to support Project.

It is a theoretical representation of data objects and the relationships among them

why do we need it ? Data modeling helps in organizing and structuring data to suit specific needs

Key aspects of data modeling 

1.Identifying Data Objects - entities associated with data that we are storing we call Data objects  e.g.  student from school db, employee from empdatabase

2.Defining Relationships: Relationships describe how data objects are related to each other.

3.Data Attributes - identifying the data attributes or properties of data objects

4. Schemas:: A schema is an overall description of the entire database, including how data is organized and how the relations among them are associated ; its a skeleton through which i can undestand all the data objects


5. Normalization: This is a process used to organize data in a database efficiently. 

6. ER Diagrams: Entity-Relationship diagrams are a common tool used in data modeling to visually represent data objects and their relationships.


Types of Data Models:
---------------------
Conceptual Data Model: This is a high-level overview of the organizational data, often used for initial planning. It focuses on the big picture, showing only major entities and relationships.

Logical Data Model: This model is more detailed, showing all entities, relationships, and key attributes. It does not include detailed information like table names and column types.

Physical Data Model: This is the most detailed data model, which includes all tables, columns, data types, constraints, and relationships. It is often what is actually implemented in a database.


Model the  BookStore
-----------------------

Step1 : Identified Entities

1. Books
2. Customers
3. Orders
4. Authors

Step2 - Defining Attributes or Properties

1. Books  - bookId , genre, title,authorID,price, units, publisher
2. Customers - customerId, name,occupation, email,phone,address
3. Orders  - orderoId, bookname, quanttity, date of purchase,total amount,
4. Authors -AuthorId name , bio, location

Step 3 - Establishing Relationships

1. A Book is written by one or more Authors.
2. Book bought by customers 
3. An Order contains one or more Books and is associated with one or more Customer.

Relationships: Books to Authors, Orders to Customers, and Orders to Books


Model the  Movie ticket booking system
-----------------------------------

step1 : Identifiying the Entities 

1. Movies
2. Customers
3. Cinemascreens,
4. bookings
5. seats

step2 : Defining the Attributes


1. Movies - movieid, releasedate ,genre,title, duration,cast
2. Customers - customerid, name,email, phone,address
3. Cinemascreens - cinemasid , location, total screens, 
4. bookings -  BookingID, MovieID, CinemaID, CustomerID, ShowTime, SeatsBooked
5. seats- SeatID, CinemaID, SeatNumber, SeatType 

step3: stablishing Relationships

A Movie can be shown in multiple Cinemas.
A Cinema can show multiple Movies at different times.
A Booking is for a particular Movie in a specific Cinema and includes one or more Seats.

Types of Database
-------------------

Relational Databases SQL: Store data in tables and relationships are formed through foreign keys. Examples include MySQL, PostgreSQL, and Oracle.

NoSQL Databases: Designed for storing large volumes of data that doesn't fit the format of traditional relational databases. Examples include MongoDB and Cassandra.


SQL (Structured Query Language) and NoSQL are terms used to describe different types of database systems, each with its own characteristics and use cases. 


SQL (Relational Databases)

1.Structure: SQL databases are table-based. They use a structured schema, meaning the structure of the data (like the data type for a column) must be defined before using it.

2.Schema: They have a fixed or static schema. Modifications to the schema require altering the database.

3. Language: Use SQL (Structured Query Language) for defining and manipulating data, which is a powerful and standardized language.

4. ACID Compliance: SQL databases strictly follow ACID properties (Atomicity, Consistency, Isolation, Durability), ensuring reliable transactions and data integrity.

5. Scalability: Traditionally, SQL databases are scaled vertically (increasing the power of the existing hardware), which can be limiting.

6. Relationships: Ideal for handling complex queries and relationships between data.

Examples: MySQL, PostgreSQL, Oracle, SQL Server.


NoSQL (Non-Relational Databases)
---------------------------
Structure: NoSQL databases can be document-oriented (JSON-like documents), key-value pairs, wide-column stores, or graph databases. They don't require a predefined schema.

Schema: They have a dynamic schema, which makes them more flexible and allows different types of data to be stored together.

Language: NoSQL databases don't use SQL; instead, they use their own query languages, which are typically less complex than SQL

ACID Compliance: While some NoSQL databases support ACID properties, they often prioritize flexibility and scalability, sometimes at the expense of strict ACID compliance.

Scalability: NoSQL databases are designed for horizontal scalability (adding more servers), making them suitable for large or constantly evolving data sets.

Relationships: Generally, they are not as good as SQL databases for complex queries involving multiple operations or joining different data types.

xamples: MongoDB, Cassandra, Redis, Neo4j.


Mongo db commands 
----------------
show dbs - shows the list of databases  with atleast one collection of record or data
show collections - lists the existing collections with atleast on record 


use <databasename> - creates a database if its not existing 


insert the data into database

db.<collectionname>.insert(data in key value pair) 

e.g. db.collection1.insert({key1:"value1"})
db.collection1.insert({key1:"value2"})
db.collection1.insert({key1:"value3"})
db.collection1.insert({key1:"value4"})

insert many record into a collection

db.customers.insertMany([
    { name: "Alice", age: 20, grade: "A" },
     { name: "Bob", age: 22, grade: "B" },
      { name: "Charlie", age: 23, grade: "A" }]
 )

Find the entire data in a collection1

db.<collectionname>.find({}) 

db.collection1.find({})

Find onle one data in a collection1
db.collection1.find({key1:"value1"})
[ { _id: ObjectId("659951b57cd28a4cd562b842"), key1: 'value1' } ]

Identify one particaular record based on unique id
db.<collectionname>.find({_id:ObjectId(<documentid>)})

db.customers.find({_id:ObjectId("659955ea7cd28a4cd562b84d")})

update a document in a collection

older verison method db.customers.update({_id:ObjectId("6599551f7cd28a4cd562b847")},{$set:{grade:"B"}})
 
newer version method db.customers.updateOne({_id:ObjectId("6599551f7cd28a4cd562b847")},{$set:{grade:"B"}})


remove a document in a collection

db.customers.remove({_id:ObjectId("6599551f7cd28a4cd562b847")})
db.customers.deleteOne({name:"Charlie"})