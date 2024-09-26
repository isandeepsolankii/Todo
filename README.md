# Todo Simple Project

This is a simple Todo application built using React and Vite. It fetches todo items from an API and displays them, allowing users to view details in a dialog box.

### Features

<ul>
<li> Fetches todo items from an API
</li>
<li> Displays a list of todos
</li>
<li>Shows detailed information about each todo in a dialog box
</li>
<li>Handles loading and error states
</li>
</ul>

### Technologies Used

<ul>
<li> React
</li>
<li> Vite
</li>
<li>Material-UI (MUI)
</li>
<li>JavaScript (ES6+)
</li>
</ul>

## Installation Steps

1. Clone the Repository
   `git clone https://github.com/yourusername/todo-simple-project.git`

2. Navigate to the Project Directory
   `cd todo-simple-project`

3. Install Dependencies

- Make sure you have Node.js installed. Then run:

```npm install

```

4. Run the Application

- Start the development server with:

```npm run dev

```

Open your browser and navigate to http://localhost:3000 (or the port specified in your terminal).

## Project Structure

```todo-simple-project/
├── src/
│   ├── components/
│   │   ├── todo-details
            ├── index.jsx     // Dialog box for todo details
│   │   └── todo-items
            ├── index.jsx      // Individual todo item component
│   └── App.jsx                   // Main application component
├── public/
│   └── index.html                // Main HTML file
├── package.json                   // Project metadata and dependencies
└── README.md                     // Project documentation
```

## Usage

- On loading, the app fetches todo items from `https://dummyjson.com/todos`.
- Each todo item is displayed with a "Details" button.
- Clicking the "Details" button opens a dialog showing the details of the selected todo.

## Error Handling

- The application displays error messages for network issues or when no todos are found.

## License

This project is licensed under the MIT License.

## Acknowledgements

- React - A JavaScript library for building user interfaces
- Vite - A modern frontend build tool
- Material-UI - A popular React UI framework

## Contact

For any questions or feedback, feel free to reach out via GitHub.
