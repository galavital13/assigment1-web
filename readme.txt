Emergency Supplies Management System
This project is a simple Emergency Supplies Management System implemented in Node.js. It allows users to perform CRUD operations on a list of emergency supplies. The system consists of two JavaScript files (server.js and EmergencySupplies.js) and a JSON file (items.json) that serves as the storage for the emergency supplies data.

Prerequisites
Node.js installed on your machine
npm (Node Package Manager)
Installation
Clone the repository:

git clone https://github.com/galavital13/assigment1-web
Navigate to the project directory:

cd emergency-supplies-management
Install dependencies:

npm install
Usage
Start the server:

node server.js
The server will be running at http://localhost:3000.

Interact with the API:

Use your preferred API testing tool or tool like curl to perform CRUD operations on emergency supplies.
Examples:
GET all items: http://localhost:3000/items
GET a specific item: http://localhost:3000/item?item_name=Bottled Water
POST a new item:

curl -X POST -H "Content-Type: application/json" -d '{"item_name":"exampleItem","unit_price":10.99,"quantity":20}' http://localhost:3000/item
PUT (update) an existing item:

curl -X PUT -H "Content-Type: application/json" -d '{"item_name":"exampleItem","unit_price":15.99,"quantity":30}' http://localhost:3000/item
DELETE an item: http://localhost:3000/item?item_name=exampleItem
Files and Structure
server.js: Main server file responsible for handling HTTP requests.
EmergencySupplies.js: Module for managing emergency supplies, including CRUD operations.
items.json: JSON file storing the emergency supplies data.
Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.
