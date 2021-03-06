import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

let AddTodo = ({dispatch})=> {
  let input;

  return (
      <div>
        <input type="text" ref={(node) => {
          input = node;
        }} />

        <input type="button" value="add" onClick={ e => {
          if(!input.value.trim()) {return;}
          dispatch(addTodo(input.value.trim()));
          input.value = '';
        }}
        />
      </div>
  )
};

AddTodo = connect()(AddTodo);

export default AddTodo;