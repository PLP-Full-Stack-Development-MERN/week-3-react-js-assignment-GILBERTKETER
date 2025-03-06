import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-4">
      <h2 className="text-xl font-bold">Counter: {count}</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
