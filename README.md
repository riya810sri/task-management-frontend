# Task Management Dashboard - Frontend

This is the frontend for the task management dashboard application built with React and styled with Tailwind CSS.

## Features

- Create, read, update, and delete tasks
- Visual status indicators (pending, in-progress, completed)
- Due date tracking
- Responsive design for all device sizes
- Clean and modern UI with Tailwind CSS

## Technologies Used

- React
- Tailwind CSS
- JavaScript

## Setup Instructions

1. Make sure you have Node.js installed on your system.
2. Navigate to the frontend directory: `cd task-management-dashboard/frontend`
3. Install dependencies: `npm install`
4. Make sure the backend server is running on `http://localhost:5000`
5. Start the development server: `npm start`
6. The application will open in your browser at `http://localhost:3000`

## Component Structure

- `App.js`: Main application component that manages state and orchestrates other components
- `components/TaskForm.js`: Form for creating new tasks
- `components/TaskList.js`: Displays a list of all tasks
- `components/TaskItem.js`: Represents an individual task with controls
- `services/taskService.js`: API service to communicate with the backend server

## API Integration

The frontend communicates with the backend API at `http://localhost:5000/api`:
- GET `/api/tasks` - Fetch all tasks
- POST `/api/tasks` - Create a new task
- PUT `/api/tasks/:id` - Update an existing task
- DELETE `/api/tasks/:id` - Delete a task