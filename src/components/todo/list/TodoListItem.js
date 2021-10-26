import React from 'react';

export const TodoListItem = ({handleDeleteTodo, handleToggleTodo, todo, index }) => {
  const handleDelete = ()=>{
    handleDeleteTodo(todo.id)
  }
  
  const handleToggle = ()=>{
    handleToggleTodo(todo.id)
  }

  return (
    <li key={todo.id} className='list-group-item'>
      {todo.done ? 
        <p onClick={handleToggle}><del >{index + 1}. {todo.desc}</del></p>:
        <p onClick={handleToggle}>{index + 1}. {todo.desc}</p>
      }
      <button
        className='btn btn-danger'
        onClick={handleDelete}
      >
        Borrar
      </button>
    </li>
  );
};
