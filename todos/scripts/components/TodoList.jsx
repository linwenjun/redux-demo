import React from 'react';
import Todo from './Todo.jsx';

const TodoList = ({todos, onTodoClick, onTodoDelete}) => (
  <ul>
    {todos.map((todo) =>
      <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onDelete={() => onTodoDelete(todo.id)}/>
    )}
  </ul>
);

export default TodoList;