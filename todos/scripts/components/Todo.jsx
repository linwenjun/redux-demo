import React from 'react';

const Todo = ({id, text, completed, onClick, onDelete}) => (
    <li>
      <span
          //todo 为什么要用双引?
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
          onClick={onClick}
      >{text}</span>
      {'      '}
      <a href="javascript:void(0)" onClick={onDelete}>删除</a>
    </li>
);

export default Todo;