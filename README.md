# Blogging Platform API

A RESTful API for a personal blogging platform, built as part of the [Blogging Platform API project on roadmap.sh](https://roadmap.sh/projects/blogging-platform-api).

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB (Mongoose)
- **Validation:** Zod

## Features

- Create, read, update, and delete blog posts
- Request body validation with clear error messages
- Consistent error handling and HTTP status codes
- Get a single post, all posts, or posts by author

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [MongoDB](https://www.mongodb.com/) running locally on port `27017`

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd basic_blog_crud
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally. The app connects to:

```
mongodb://127.0.0.1:27017/blogs
```

### 4. Run the development server

```bash
npm run dev
```

The server starts at `http://localhost:3000`.

### Production build

```bash
npm run build
npm start
```

## API Endpoints

Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/posts` | Create a new blog post |
| `GET` | `/posts` | Get all blog posts |
| `GET` | `/posts/:id` | Get a single blog post by ID |
| `PATCH` | `/posts/:id` | Update an existing blog post |
| `DELETE` | `/posts/:id` | Delete a blog post |
| `GET` | `/posts/author/:author` | Get a blog post by author |

### Create a blog post

**Request**

```http
POST /api/posts
Content-Type: application/json
```

```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"],
  "author": "John Doe"
}
```

**Response — `201 Created`**

```json
{
  "status": "success",
  "data": {
    "_id": "665f1a2b3c4d5e6f7a8b9c0d",
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "category": "Technology",
    "tags": ["Tech", "Programming"],
    "author": "John Doe",
    "createdAt": "2021-09-01T12:00:00.000Z",
    "updatedAt": "2021-09-01T12:00:00.000Z"
  }
}
```

### Get all blog posts

**Request**

```http
GET /api/posts
```

**Response — `200 OK`**

```json
{
  "status": "success",
  "message": "Blogs retrieved successfully",
  "data": [
    {
      "_id": "665f1a2b3c4d5e6f7a8b9c0d",
      "title": "My First Blog Post",
      "content": "This is the content of my first blog post.",
      "category": "Technology",
      "tags": ["Tech", "Programming"],
      "author": "John Doe",
      "createdAt": "2021-09-01T12:00:00.000Z",
      "updatedAt": "2021-09-01T12:00:00.000Z"
    }
  ]
}
```

### Get a single blog post

**Request**

```http
GET /api/posts/:id
```

**Response — `200 OK`** — returns the blog post object in `data`.

**Response — `404 Not Found`**

```json
{
  "status": "error",
  "message": "Blog not found"
}
```

### Update a blog post

**Request**

```http
PATCH /api/posts/:id
Content-Type: application/json
```

```json
{
  "title": "My Updated Blog Post",
  "content": "This is the updated content of my first blog post.",
  "category": "Technology",
  "tags": ["Tech", "Programming"]
}
```

**Response — `200 OK`** — returns the updated blog post in `data`.

**Response — `404 Not Found`** — if the blog post does not exist.

### Delete a blog post

**Request**

```http
DELETE /api/posts/:id
```

**Response — `204 No Content`** — empty body on success.

**Response — `404 Not Found`** — if the blog post does not exist.

### Validation errors

Invalid request bodies return **`400 Bad Request`**:

```json
{
  "status": "fail",
  "errors": [
    {
      "field": "title",
      "message": "Title must be at least 3 characters long"
    }
  ]
}
```

## Project Reference

This project was built following the requirements from:

**https://roadmap.sh/projects/blogging-platform-api**

## License

ISC
