TaskBoard Project

Overview

The TaskBoard project is a simple and intuitive task management web application built using React and TypeScript with NextUI as the primary UI component library. It allows users to organize tasks into three major categories:

To Do

In Progress

Completed

Tech Stack

Frontend: React, TypeScript

UI Components: NextUI

Drag-and-Drop: Framer Motion

State Management: React Context API

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

