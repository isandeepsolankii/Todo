import { useEffect, useState } from "react";
import TodoItems from "./todo-items";
import TodoDialogBox from "./todo-details";

function TodoSimpleProject() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading as true
  const [error, setError] = useState(null); // State to handle errors
  const [todoDetails, setTodoDetails] = useState("Loading...");
  const [openDialog, setOpenDialog] = useState(false);

  async function EachTodo(todosId) {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${todosId}`);
      const result = await apiResponse.json();
      console.log(result);
      if (result) {
        setOpenDialog(true);
        setTodoDetails(result);
      } else {
        setOpenDialog(false);
        setTodoDetails("Loading...");
      }
    } catch (e) {
      console.log("Each Todo Error is :", e);
    }
  }

  async function TodoItemsList() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();
      if (result && result.todos) {
        setTodo(result.todos);
      } else {
        setTodo([]);
        setError("No todos found.");
      }
    } catch (e) {
      setError("Error fetching data.");
      console.log(e);
    } finally {
      setLoading(false); // Ensure loading is set to false after data fetch
    }
  }

  const todosResult = todo.map((item, index) => (
    <TodoItems
      key={index}
      todos={item}
      error={error}
      EachTodo={EachTodo}
      setOpenDialog={setOpenDialog}
    />
  ));

  useEffect(() => {
    TodoItemsList();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Return the loading state
  }

  return (
    <div>
      <p>Simple TODO Project - Using React Js and Vite</p>
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            {todosResult.length > 0 ? todosResult : <p>No todos available.</p>}
          </div>
        )}
      </div>
      <TodoDialogBox
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default TodoSimpleProject;
