import React, {Component} from 'react';
import VisibleTodoList from '../container/VisibleTodoList.jsx';
import AddTodo from '../container/AddTodo.jsx';
import Footer from '../components/Footer.jsx';

const App = () => (
    <div>
      <h3>TodoList</h3>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
);

export default App;