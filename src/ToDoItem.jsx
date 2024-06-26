
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

export default function ToDoItem({todo, remove, toggle }) {
    const labelId = `checkbox-list-label-${todo.id}`;
    const removeTodo = () => {
        remove(todo.id);
    };

    return (
        <ListItem
            secondaryAction={
          <IconButton 
            edge="end" 
            aria-label="comments"
            onClick={removeTodo}
            >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
              onChange={toggle}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={todo.text} />
        
      </ListItem>
    )

}