// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// The `setInterval` lacked a cleanup , making the count jump by 2 instead of 1,
// so I stored the interval's ID returned by `setInterval` in a variable,
// then retuned a cleanup function from useEffect that calls clearInterval on that ID.
// This makes sure any existing timer is stopped before a new one starts,
// so only one interval ever runs at a time and the count increments correctly by 1
