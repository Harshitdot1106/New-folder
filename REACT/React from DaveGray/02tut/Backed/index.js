const express = require('express');
const server = express();
const fs = require('fs');
const cors = require('cors');

server.use(cors());

// Load JSON data
const data = JSON.parse(fs.readFileSync('C:\\Users\\DELL\\Desktop\\New folder\\REACT\\React from DaveGray\\02tut\\data\\db.json', 'utf-8'));
const items = data.posts;

// Route to get all items
server.get('/item', (req, res) => {
  console.log('Fetching posts'); 
  res.json(items);
});

// Route to get a single item by ID
server.get('/item/:id', (req, res) => {
  const id = parseInt(req.params.id, 10); // Convert ID to a number
  const item = items.find(item => item.id === id);
console.log('Fetching posts'); 
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});
server.post('/item', (req, res) => {
  const newItem = req.body;
console.log('Fetching posts'); 
  if (!newItem.title || !newItem.body) {
    return res.status(400).json({ message: 'Title and body are required' });
  }

  // Generate a new ID for the item
  const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
  const datetime = new Date().toLocaleString();
  const item = { id: newId, title: newItem.title, datetime, body: newItem.body };

  items.push(item);

  // Optionally save the new list to the file (you'd implement file saving here)
  // fs.writeFileSync('../data/db.json', JSON.stringify({ items }));

  res.status(201).json(item);
});

// Start the server
server.listen(3500, () => {
  console.log('Server has started on port 3500');
});