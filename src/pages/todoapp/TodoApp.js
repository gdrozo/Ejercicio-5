import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from '../../components/todo/list/TodoList';
import { TodoAdd } from '../../components/todo/add/TodoAdd';
import './TodoApp.scss';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: 'toggle',
      payload: id,
    });
  };

  return (
    <div className='todo-container'>
      <h1>TodoApp ( {todos.length} ) </h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList handleDeleteTodo={handleDeleteTodo} handleToggleTodo={handleToggleTodo} todos={todos} />
        </div>

        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
