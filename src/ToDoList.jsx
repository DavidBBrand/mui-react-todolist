
import List from '@mui/material/List';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import { Box, Typography } from "@mui/material";

import { useState, useEffect } from "react";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
}
export default function ToDoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
      localStorage.setItem(
        'todos',
        JSON.stringify(todos),
      )
    }, [todos])

    const removeTodo = (id) => {
      setTodos(prevTodos => {
        return prevTodos.filter(t => t.id !== id)
      })
    }
    const toggleTodo = (id) => {
      setTodos(prevTodos => {
        return prevTodos.map((todo) => {
          if(todo.id === id) {
            return { ...todo, completed: !todo.completed }
          } else {
            return todo;
          }
        })
      })
    }
    const addTodo = (text) => {
      setTodos(prevTodos => {
        return [...prevTodos, {text: text, id: crypto.randomUUID(), completed: false}];
      });
     };
    return (
      <Box 
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          m: 3,
          background: "lightGreen",
        }}
      >
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            To-Do List
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
              return  <ToDoItem todo={todo}  key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)} />;

            })}
            <ToDoForm addTodo={addTodo} />
        </List>
      </Box>
    )
}








