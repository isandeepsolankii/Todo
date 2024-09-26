import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Fragment } from "react";

function TodoItems({ todos, EachTodo, setOpenDialog }) {
  function handleOnClick() {
    EachTodo(todos.id);
    setOpenDialog(true);
  }

  return (
    <Card sx={{ padding: "10px", margin: "20px" }}>
      <CardContent>
        <Typography variant="h5">{todos.todo}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOnClick}>Details</Button>
      </CardActions>
    </Card>
  );
}

export default TodoItems;
