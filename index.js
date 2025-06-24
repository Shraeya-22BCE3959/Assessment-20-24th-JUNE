const express = require('express');
const app = express();
const PORT = 4000;

// Sample 10 student objects
const students = [
  { id: 1, name: "Arun", age: 20, grade: "A" },
  { id: 2, name: "Priya", age: 21, grade: "B" },
  { id: 3, name: "Vikram", age: 22, grade: "A" },
  { id: 4, name: "Divya", age: 20, grade: "C" },
  { id: 5, name: "Karthik", age: 23, grade: "B" },
  { id: 6, name: "Sneha", age: 19, grade: "A" },
  { id: 7, name: "Ravi", age: 21, grade: "B" },
  { id: 8, name: "Anjali", age: 22, grade: "A" },
  { id: 9, name: "Surya", age: 20, grade: "C" },
  { id: 10, name: "Meera", age: 19, grade: "A" }
];

// Root route returns students
app.get('/', (req, res) => {
  res.status(200).json(students);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
