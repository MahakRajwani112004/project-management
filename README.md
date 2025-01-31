TaskBoard Project

Overview

The TaskBoard project is a simple and intuitive task management web application built using React and TypeScript with NextUI as the primary UI component library. It allows users to organize tasks into three major categories:

To Do

In Progress

Completed

The app features drag-and-drop functionality powered by Framer Motion, enabling seamless task movement between categories while maintaining state. This project is designed with state optimization and constant data operations, making it scalable and efficient.

Features

Task Categorization: Organize tasks under "To Do," "In Progress," and "Completed."

Drag and Drop: Smooth drag-and-drop feature to move tasks between categories.

Persistent State Management: Manage task states using a context-based approach.

Custom Card Component: Visually appealing cards to display task details.

UI Components: Styled using NextUI for a clean and modern interface.

Tech Stack

Frontend: React, TypeScript

UI Components: NextUI

Drag-and-Drop: Framer Motion

State Management: React Context API

Folder Structure

TaskBoard/
├── src/
│   ├── components/
│   │   ├── TaskBoard.tsx
│   │   ├── TaskColumn.tsx
│   │   └── CustomCard.tsx
│   ├── contexts/
│   │   └── TaskContext.tsx
│   ├── App.tsx
│   └── index.tsx
└── README.md

Getting Started

Prerequisites

Node.js (v14 or higher)

npm or yarn package manager

Installation

Clone the repository:

git clone https://github.com/your-username/TaskBoard.git

Navigate to the project directory:

cd TaskBoard

Install dependencies:

npm install

Running the Application

To start the development server, run:

npm start

Open http://localhost:3000 to view the app in your browser.

Usage

Add tasks to the "To Do" column.

Drag and drop tasks between "To Do," "In Progress," and "Completed" categories.

Click on a task card for further actions if needed.

Component Breakdown

TaskBoard Component

Main component displaying the three task categories.

TaskColumn Component

Displays tasks for a specific category and handles drag-and-drop events.

CustomCard Component

A reusable card component to display individual tasks.

TaskContext

Manages task state and provides functions to add, move, and remove tasks.

Key Functions

addTask(task, category): Adds a task to a specific category.

moveTask(taskId, fromCategory, toCategory): Moves a task between categories.

removeTask(taskId, category): Removes a task from a category.

Example Task State

{
  "todo": [
    { "id": "1", "title": "Design UI", "description": "Create wireframes for the new feature." }
  ],
  "inProgress": [],
  "completed": []
}

Future Enhancements

Persistent storage using local storage or a backend.

User authentication and task sharing.

Enhanced drag-and-drop experience with animations.

Contributing

Fork the repository.

Create a new branch (feature/task-enhancement).

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature/task-enhancement).

Open a Pull Request.

License

This project is licensed under the MIT License.

Contact

For any inquiries or feedback, feel free to contact Mahak Rajwani.

