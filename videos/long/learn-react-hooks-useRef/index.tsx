import { useState } from "react";

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);

    console.log("State:", count);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export function Demo2({}: DemoProps) {

  return (
    <div className="tutorial">
      <input type="text" placeholder="Type something..." />
    </div>
  );
}
