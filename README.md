# URL Shortener API

A backend API for creating short URLs and redirecting users to their original URLs.

## Features

* Create short URLs
* Generate unique short codes using Base62 encoding
* Atomic counter for sequential ID generation
* Redirect short URLs to original URLs
* MongoDB persistence with Mongoose
* Zod request validation
* Custom application errors
* Centralized error handling
* Production-style Route → Controller → Service architecture

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Zod
* dotenv

## Project Structure

```text
url-shortener/
├── .gitignore
├── .env
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── src/
    ├── app.js
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── url.controller.js
    ├── errors/
    │   └── app.error.js
    ├── middleware/
    │   └── error.middleware.js
    ├── models/
    │   ├── counter.model.js
    │   └── url.model.js
    ├── routes/
    │   └── url.routers.js
    ├── services/
    │   └── url.service.js
    └── validators/
        └── url.validation.js
```

## API Endpoints

### Create Short URL

**POST**

```text
/api/urls
```

Request body:

```json
{
  "originalUrl": "https://google.com"
}
```

Example response:

```json
{
  "newurl": {
    "originalUrl": "https://google.com",
    "shortCode": "1"
  }
}
```

### Redirect to Original URL

**GET**

```text
/api/urls/:shortcode
```

Example:

```text
GET /api/urls/1
```

If the shortcode exists, the API redirects the user to the stored original URL.

### Invalid URL

Request:

```json
{
  "originalUrl": "hello"
}
```

Response:

```json
{
  "message": "Invalid URL"
}
```

Status:

```text
400 Bad Request
```

### Shortcode Not Found

Request:

```text
GET /api/urls/999999
```

Response:

```json
{
  "message": "Shortcode not found"
}
```

Status:

```text
404 Not Found
```

## How Short Codes Are Generated

The API uses a MongoDB counter to generate sequential IDs.

```text
Counter
   ↓
Sequential ID
   ↓
Base62 encoding
   ↓
Short Code
   ↓
MongoDB
```

For example:

```text
1   → 1
2   → 2
10  → a
62  → 10
```

Base62 uses:

```text
0-9
a-z
A-Z
```

The counter is updated atomically using MongoDB's `$inc` operator.

## Error Handling

The project uses a custom `AppError` class and centralized error middleware.

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Database
  ↓
Error
  ↓
Central Error Middleware
  ↓
HTTP Response
```

Application errors can be created with:

```js
throw new AppError("Shortcode not found", 404);
```

Unexpected errors are handled as:

```text
500 Internal Server Error
```

## Validation

Request validation is handled using Zod.

Example:

```js
const urlSchema = z.object({
    originalUrl: z.string().url()
});
```

This prevents invalid URL data from reaching the service layer.

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

Do not commit `.env` to GitHub.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/PRANAVsh07/url-shortener.git
```

Move into the project:

```bash
cd url-shortener
```

Install dependencies:

```bash
npm install
```

Create your `.env` file:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

Start the server:

```bash
node server.js
```

Or, if using nodemon:

```bash
npx nodemon server.js
```

The server will run on:

```text
http://localhost:3000
```

## Architecture

The backend follows a layered architecture:

```text
Request
   ↓
Route
   ↓
Controller
   ↓
Validator
   ↓
Service
   ↓
Model
   ↓
MongoDB
```

Errors are handled centrally through middleware.

## What I Learned

Building this project helped me understand:

* Express backend structure
* Route, Controller and Service separation
* MongoDB and Mongoose
* Atomic database operations
* Base62 encoding
* Request validation with Zod
* Custom error classes
* Centralized error handling
* Async error propagation in Express 5
* Environment variables
* Git and GitHub workflow

## Future Improvements

Possible future improvements include:

* URL expiration
* Click analytics
* Rate limiting
* User authentication
* Custom short codes
* QR code generation
* Redis caching
* API documentation with Swagger
