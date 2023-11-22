
import List from '@mui/material/List';
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

import { useState } from "react";
const initialTodos = [
  {id:1, text: "walk the dog", completed: false},
  {id:2, text: "walk the fish", completed: true},
  {id:3, text: "walk the donkey", completed: false},
  {id:4, text: "walk the pug", completed: true},
  {id:5, text: "walk the monkey", completed: true},
];

export default function ToDoList() {
    const [todos, setTodos] = useState(initialTodos);

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
        return [...prevTodos, {text: text, id: 8, completed: false}];
      });
     };
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
              return  <ToDoItem todo={todo}  key={todo.id} remove={removeTodo} toggle={() => toggleTodo(todo.id)} />;

            })}
            <ToDoForm addTodo={addTodo} />
        </List>
    )
}








