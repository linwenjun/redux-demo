import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter.jsx';
import {createStore} from 'redux';
import {counter} from './reducers';

var store = createStore(counter);

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
      <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch({type: 'INCREMENT'})}
          onDecrement={() => store.dispatch({type: 'DECREMENT'})}
      />,

      rootEl
  )
}

store.subscribe(render);

render();