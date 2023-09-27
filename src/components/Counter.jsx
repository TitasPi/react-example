import { useState } from 'react'

function Counter() {
  const [counter, setCounter] = useState(0);

  function up() {
    setCounter(counter + 1);
  }
  
  function down() {
    setCounter(counter - 1);
  }

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </>
  )
}

export default Counter