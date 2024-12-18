import React, { useState } from 'react';

import { initialItems } from './utils';

interface DemoProps {}


/*
 hypothesis: so every time the count changes it causes a rerender
 which means that initialItems is re-executed
 which is expensive because of the 29m+ array
*/

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = items.find((item) => item.selected)

  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Demo;
