import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({handleDeleteTodo, handleToggleTodo, todos }) => {

  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem key={todo.id}  handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} todo={todo} index={i} />
      ))}
    </ul>
  );
};
