import {connect} from 'react-redux';
import TodoList from '../components/TodoList.jsx';
import { toggleTodo, deleteTodo } from '../actions';

const mapStateToProps = (state) => {
  switch(state.visibleFilter) {
    case 'all':
      return {
        todos: state.todos
      };
    case 'active':
      return {
        todos: state.todos.filter(item => (item.completed))
      }
    case 'completed':
      return {
        todos: state.todos.filter(item => (!item.completed))
      }
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id)=> {
      dispatch(toggleTodo(id));
    },
    onTodoDelete: (id)=> {
      dispatch(deleteTodo(id));
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;