let nextTodoId = 9;

export const toggleTodo = (id)=> ({
  type: 'TOGGLE_TODO',
  id
});

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
  }
};

export const deleteTodo = (id)=> ({
  type: 'DELETE_TODO',
  id
});

export const setVisibilityFilter = (filter)=> ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});