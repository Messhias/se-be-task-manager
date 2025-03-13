# Task Management API

A robust RESTful API for managing tasks built with NestJS, PostgreSQL, and Redis.

## 🚀 Features

- **RESTful API** with CRUD operations for tasks
- **PostgreSQL** for data persistence
- **Redis** for caching task data
- **Swagger** documentation
- **Docker** and **Docker Compose** for containerization
- **TypeScript** for type safety
- **Class Validator** for request validation
- **UUID** for unique task identifiers

## 📋 Prerequisites

- Docker and Docker Compose installed
- Node.js 20+ (for local development)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd task-management-api
```

2. Create a `.env` file in the root directory with the following content:
```env
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/taskmanager
REDIS_URL=redis://redis:6379
```

3. Build and start the containers:
```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

Access the Swagger documentation at `http://localhost:3000/documentation`

### Available Endpoints

#### Tasks

- `POST /tasks` - Create a new task
  ```json
  {
    "title": "Complete project documentation",
    "description": "Write comprehensive documentation for the Task Management API",
    "status": "PENDING"
  }
  ```

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get a specific task by ID
- `PUT /tasks/:id` - Update a task
  ```json
  {
    "title": "Updated task title",
    "description": "Updated task description",
    "status": "IN_PROGRESS"
  }
  ```
- `DELETE /tasks/:id` - Delete a task

### Task Properties

- `id`: UUID (auto-generated)
- `title`: string (required)
- `description`: string (optional)
- `status`: enum (PENDING | IN_PROGRESS | COMPLETE)
- `createdAt`: timestamp (auto-generated)
- `updatedAt`: timestamp (auto-updated)

## 🏗️ Project Structure

```
src/
├── common/
│   └── pipes/
│       └── parse-uuid.pipe.ts
├── tasks/
│   ├── dto/
│   │   ├── create-task.dto.ts
│   │   └── update-task.dto.ts
│   ├── entities/
│   │   └── task.entity.ts
│   ├── tasks.controller.ts
│   ├── tasks.module.ts
│   └── tasks.service.ts
├── app.controller.ts
├── app.module.ts
└── main.ts
```

## 🐳 Docker Services

- **API**: NestJS application running on port 3000
- **PostgreSQL**: Database running on port 5432
- **Redis**: Cache server running on port 6379

## 🔧 Development

To run the application locally without Docker:

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run start:dev
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 License

This project is licensed under the MIT License.


