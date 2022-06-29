import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const decrement = () => {
    dispatch({
      type: 'DEC',
    });
  };
  const increment = () => {
    dispatch({
      type: 'INC',
    });
  };
  const addBy = () => {
    dispatch({
      type: 'ADD',
      payload: 10,
    });
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
