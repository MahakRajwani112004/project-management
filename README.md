# TaskBoard Project
The TaskBoard project is a simple and intuitive task management web application built using **React** and **TypeScript** with **NextUI** as the primary UI component library. It allows users to organize tasks into three major categories: **To Do**, **In Progress**, and **Completed**.

## Overview

The TaskBoard project is inspired by the [Project Management Dashboard](https://www.figma.com/design/JKf79kTq3XSY2Bg8ZppEXG/Project-Management-Dashboard-(Community)?node-id=0-1&p=f&t=0UK5V8L1kpAj9lsu-0) design on Figma. It provides a clean and user-friendly interface for managing tasks efficiently.

## Features

- **Task Management**: Organize tasks into three categories: To Do, In Progress, and Completed.
- **Drag-and-Drop**: Easily move tasks between categories using drag-and-drop functionality.
- **Responsive Design**: Built with a responsive layout for seamless use on all devices.
- **Customizable**: Add, move, and remove tasks with ease.

## Tech Stack

- **Frontend**: React, TypeScript
- **UI Components**: [NextUI](https://nextui.org/)
- **Drag-and-Drop**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: React Context API


## Getting Started

To set up and run the TaskBoard project locally, follow these steps:

1. **Clone the repository**:
   ```bash
    git clone https://github.com/MahakRajwani112004/project-management.git
    cd project-management
2 . **Install dependencies:**
   ```bash
    yarn install
   ```
3 . **Start the development server:**
   ```bash
    yarn dev
   ```
4. **Open your browser and navigate to:**
   ```bash
   http://localhost:5173/app/home
   ```
5. **Explore the UI:**
   ```bash
    Add tasks to the "To Do" column.
    Drag and drop tasks between columns.
    Remove tasks as needed.
   ```

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




Contact

For any inquiries or feedback, feel free to contact Mahak Rajwani.

