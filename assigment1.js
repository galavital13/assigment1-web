const http = require('http');
const url = require('url');
const { parse } = require('querystring');
const Emergency = require('./EmergenctSupllies.js');

// Simple in-memory storage for items
const items = new Emergency.items('items.json');

const server = http.createServer((req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);

    // Read current items levels
    if (req.method === 'GET' && parsedUrl.pathname === '/items') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({ items: items.getItems() })
      );
    } else if (req.method === 'GET' && parsedUrl.pathname === '/item') {
      const queryParams = parsedUrl.query;
      const item_name = queryParams.item_name;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({ items: items.getItem(item_name) })
      );
    } else if (req.method === 'POST' && parsedUrl.pathname === '/item') {
      jsonRequestBody = '';
      req.on('data', (chunk) => {
        jsonRequestBody += chunk;
      });
      req.on('end', () => {
        try {
          const body = JSON.parse(jsonRequestBody);
          items.addItem(body);
          res.end(JSON.stringify({ message: 'Item has been added!' }));
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Invalid JSON format in the request body' }));
        }
      });
    } else if (req.method === 'PUT' && parsedUrl.pathname === '/item') {
      jsonRequestBody = '';
      req.on('data', (chunk) => {
        jsonRequestBody += chunk;
      });
      req.on('end', () => {
        try {
          const body = JSON.parse(jsonRequestBody);
          items.updateItem(body);
          res.end(JSON.stringify({ message: 'Item has been updated!' }));
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Invalid JSON format in the request body' }));
        }
      });
    } else if (req.method === 'DELETE' && parsedUrl.pathname === '/item') {
      const queryParams = parsedUrl.query;
      const item_name = queryParams.item_name;
      items.deleteItem(item_name);
      res.end(JSON.stringify({ message: 'Item has been deleted!' }));
    } else {
      // Invalid endpoint
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Invalid endpoint' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Internal server error' }));
  }
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
