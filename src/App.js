import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const increment = () => {
    dispatch(actions.increment());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment} style={{ padding: '10px', borderRadius: '10px', margin: '10px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ padding: '10px', borderRadius: '10px', margin: '10px' }}>
        Decrement
      </button>
      <button onClick={addBy} style={{ padding: '10px', borderRadius: '10px', margin: '10px' }}>
        Add By 10
      </button>
    </div>
  );
}

export default App;
