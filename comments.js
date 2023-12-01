// Create web server
// 1. Create a web server
// 2. Create a route for /comments
// 3. Create a route for /comments/new
// 4. Create a route for /comments/:id
// 5. Create a route for /comments/:id/edit
// 6. Create a route for /comments/:id/delete

// 1. Create a web server
const express = require("express")
const app = express()
const port = 3000

// 2. Create a route for /comments
app.get("/comments", (req, res) => {
  res.send("This is a comments page")
})

// 3. Create a route for /comments/new
app.get("/comments/new", (req, res) => {
  res.send("This is a new comments page")
})

// 4. Create a route for /comments/:id
app.get("/comments/:id", (req, res) => {
  res.send(`This is a comments page with id ${req.params.id}`)
})

// 5. Create a route for /comments/:id/edit
app.get("/comments/:id/edit", (req, res) => {
  res.send(`This is a edit comments page with id ${req.params.id}`)
})

// 6. Create a route for /comments/:id/delete
app.get("/comments/:id/delete", (req, res) => {
  res.send(`This is a delete comments page with id ${req.params.id}`)
})

// Start server
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
)
