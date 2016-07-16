import {createStore} from 'redux';

function counter(state=0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

var store = createStore(counter);
var valEl = document.getElementById("value");
var insBtn = document.getElementById('increment');
var resetBtn = document.getElementById('reset');

function render() {
  valEl.innerHTML = store.getState().toString();
}

render();

store.subscribe(render);

insBtn.addEventListener('click', ()=> {
  store.dispatch({
    type: "INCREMENT"
  })
});

resetBtn.addEventListener('click', ()=> {
  store.dispatch({
    type: "RESET"
  })
});

