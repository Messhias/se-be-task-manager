# Task Management API


## 🎯 Objective  
Build a simple **Task Management API** using either **Node.js / Nest.js** or **Python** that allows users to manage tasks efficiently.



## ✅ Must-Have Features  
- Implement a **RESTful API** with the following endpoints:  
  - `POST /tasks` → Create a new task (Title & Description required)  
  - `GET /tasks` → Retrieve all tasks  
  - `GET /tasks/:id` → Retrieve a specific task by ID  
  - `PUT /tasks/:id` → Update an existing task (Title, Description, or Status)  
  - `DELETE /tasks/:id` → Delete a task
- Each task should have the following properties:  
  - `id`: Unique identifier  
  - `title`: Task title  
  - `description`: Task details  
  - `status`: Task stage (Pending, In Progress, Complete)  
  - `createdAt`: Timestamp when task was created  
  - `updatedAt`: Timestamp when task was last updated  
- Use **REST API** best practices for API design (proper HTTP methods, status codes, etc.).  
- Use **MongoDB** or **PostgreSQL** for data storage.  
- Implement **error handling and validation** (e.g., missing title, invalid status).  
- Follow best practices for **code structure and modularity**.  



## 🌟 Bonus Points  
- Implement **caching** for the `GET /tasks/:id` endpoint using **Redis**.  
  - Cache the task data when it's fetched.  
  - Invalidate the cache whenever a task is edited or deleted.
- Containerize the application using Docker and provide instructions to run it locally using Docker Compose.



## 📦 Deliverables  
- **GitHub repository** with a **README.md** file explaining:  
  - How to run the app locally  
  - API documentation (list of endpoints & request/response examples)  
  - Mention which bonus points are covered  
- Provide a **working link** of the deployed API with all endpoints accessible (You can deploy on any platform you prefer)



⏳ **Estimated Time**: ~4-5 hours  


