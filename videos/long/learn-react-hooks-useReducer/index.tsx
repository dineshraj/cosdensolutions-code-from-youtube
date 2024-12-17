import React, { useReducer, useState } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: 'increment' | 'decrement';
}

const reducer = (state: State, action: Action) => { 
  const { type } = action;

  switch (type) {
    case 'increment': {
      // we  want to throw an error if the new count > 5
      const newCount = state.count + 1
      const hasError = newCount > 5
      // return copy of state with updated count
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'error' : null
      }
    }
    case 'decrement': {
      // we  want to throw an error if the new count < 0
      const newCount = state.count - 1
      const hasError = newCount < 0
      // return copy of state with updated count
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? 'error' : null
      }
    }
    default: 
      return state
  }
}

export function DemoWithUseReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div>
      <div>Count: {state.count}</div>
      {state.error && <p>{state.error}</p>}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement'})}>Decrement</button>
    </div>
  )
}



// equivalent example with useState
export function DemoWithUseState() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const dispatch = (event) => {
    const type = event.target.value;

    switch (type) {
      case 'increment': {
        const newCount = count + 1;
        const hasError = count > 5;
        if (hasError) {
          setError('ahh');
        } else {
          setCount(newCount)
        }
      }
      case 'decrement': {
        const newCount = count - 1;
        const hasError = count < 0;
        if (hasError) {
          setError('ahh');
        } else {
          setCount(newCount)
        }
      }
    }

  }

  return (
    <div>
      <div>Count: {count}</div>
      {error && <p>{error}</p>}
      <button onClick={dispatch}>Increment</button>
      <button onClick={dispatch}>Decrement</button>
    </div>
  )
}