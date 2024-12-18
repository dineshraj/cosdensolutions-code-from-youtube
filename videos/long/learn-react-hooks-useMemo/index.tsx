import React, { useState, useMemo } from 'react';

import { initialItems } from './utils';

interface DemoProps {}


/*
Hypothesis: 
  so every time the count changes it causes a rerender
  which means that initialItems is re-executed
  which is expensive because of the 29m+ array

WRONG
  initialItems in use state is stored in state so is only called once
  The issue is that selectedItem keeps being called with a find on a 29m+
  array each time the value is clicked, which is expensive
*/

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // finds the selectedItem each re-render, but it is static so 
  // this is pointless and needs to be cached
  // in the dependancy array specify what it neeeds to listen to
  
  // const selectedItem = items.find((item => item.isSelected); // OLD
  const selectedItem = useMemo(() => items.find((item) => item.isSelected), [items]);

  // Different example where we address the dynamic ID
  // so the item we want is the one that is equal to the count
  // doesn't work beacause it cache count because we haven't added it to the
  // dependancy array
  // const selectedItem = useMemo(() => items.find((item) => item.id === count), [items]); //wrong
  // const selectedItem = useMemo(() => items.find((item) => item.id === count), [items, count]); //right

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
