import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App.jsx';
import todoApp from './reducers';


var store = createStore(todoApp);

function render() {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
  )
}

render();