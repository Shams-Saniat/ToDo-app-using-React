# Simple ToDo App

A **Simple ToDo App** built using React that allows users to manage tasks efficiently by adding new tasks, marking tasks as completed, and toggling between completed and pending statuses.

## Features
- **Add Task:** Add a new task to the to-do list.
- **Mark as Completed:** Click on a task to mark it as completed or revert it to pending.
- **Interactive UI:** Visual indication of task status with dynamic styles.

## Application Workflow
1. Enter a task in the input field.
2. Click the "Save" button to add it to the list.
3. Click on any task in the list to toggle its status between "pending" and "completed."
4. Completed tasks are visually distinguished by a green color and a strikethrough.

---

## Code Overview

### **Main Components**
1. **`App` Component:**
   - The root component that manages the state of the application.
   - Handles input, task creation, task listing, and status toggling.

### **Key Functionalities**

#### **State Management**
- `useState` is used to manage:
  - `data`: Stores the current value entered in the input field.
  - `item`: Holds the list of tasks with their title and status.

#### **Functions**
1. **`handleChange(e)`**
   - Updates the `data` state with the value from the input field.
2. **`handleSave()`**
   - Adds a new task to the `item` array if the input is not empty.
   - Resets the input field after saving.
3. **`handleTaskStatus(index)`**
   - Toggles the status of a task between "pending" and "completed."
   - Updates the task style dynamically based on its status.

#### **Dynamic Styles**
- Task appearance changes based on its `status`:
  - **Pending**: Red text, no strikethrough.
  - **Completed**: Green text, with strikethrough.

---

## How to Use

### **Setup**
1. Clone this repository:
   ```bash
   git clone https://github.com/Shams-Saniat/ToDo-app-using-React
2. Navigate to the project directory:
   ```bash
   cd todo-app
4. Install dependencies:
   ```bash
   npm install
6. Run the app:
   ```bash
   npm start


