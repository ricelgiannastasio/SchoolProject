import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>计数器: {count}</h1>
      <button onClick={incrementCounter}>增加计数</button>
    </div>
  );
}

export default MyComponent;
