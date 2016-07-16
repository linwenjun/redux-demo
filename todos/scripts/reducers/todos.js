var data = [
  {completed: false, id: 1, text: "aaa"},
  {completed: false, id: 2, text: "bbb"},
  {completed: false, id: 3, text: "ccc"},
  {completed: true, id: 4, text: "ddd"}
];

const todo = (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: action.id,
        completed: false
      };
    default:
      return state
  }
};

const todos = (state = data, action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return state.map(item => {
        if(item.id === action.id) {
          item.completed = !item.completed;
        }
        return item;
      });
    case 'ADD_TODO':
      return [
          ...state,
          todo(undefined, action)
      ];
    case 'DELETE_TODO':
      return state.filter(item => {
        return item.id !== action.id;
      });
    default :
      return state
  }
};

export default todos;
