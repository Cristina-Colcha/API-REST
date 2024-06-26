

# REST API project in JavaScript

This project implements a basic REST API using JavaScript and Express.js for creating a customer management system. It includes both the server and a minimal client to interact with the API.

## Project Structure

The project is organized as follows:

API-REST/
│
├── server/ # Server folder
│ ├── index.js # Server main file
│ ├── controllers/ # Controllers to handle requests
│ ├── models/ # Data models
│ ├── routes/ # API routes
│ ├── services/ # Business logic
│ └── swagger/ # Swagger Settings
│ └── swagger.yaml # OpenAPI specification file (Swagger)
│
├── client/ # Client folder (optional if there is no client)
│ ├── index.html # Client home page
│ ├── script.js # Client scripts
│ └── style.css # Client styles (optional)
│
├── README.md # Project documentation (in English)
└── package.json # Node.js configuration file



## Implemented Functionalities

- **CRUD Operations**: Allows basic client management (Create, Read, Update, Delete).
- **RESTful API**: Implementation of REST endpoints to interact with clients.

## Used technology

- **Node.js**: Execution environment for server-side JavaScript.
- **Express.js**: Web framework for Node.js used to create the REST API.
- **Fetch API**: Used on the client to make HTTP requests to the server.

## Installation and Execution

1. **Clone the repository**:

 ```bash
 git clone <repository-url>
 cd <project-name>

## Facility

1. Clone this repository.
2. Install the dependencies using `npm install`.

## Use

- Run `node server/index.js` to start the server.
- You can access the API through `http://localhost:3000/api-docs`.

## Endpoints

- `GET /customers`: Get all customers.
- `GET /customers/:id`: Get a customer by ID.
- `POST /customers`: Create a new customer.
- `PUT /customers/:id`: Update a customer by ID.
- `DELETE /customers/:id`: Delete a customer by ID.
-
## Contributions


Contributions are welcome. If you would like to improve this project, please open an issue to discuss the proposed changes.

Author
Name: [Cristina Colcha, Edwin Proaño]
GitHub: https://github.com/Cristina-Colcha/API-REST.git

### Step 4: Running the API

- Run `node server/index.js` to start the server.
- You can access the API through `http://localhost:3000/api-docs`.

### GET /customers

Response:
```json
{
 "message": "Get all customers"
}


