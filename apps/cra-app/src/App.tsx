import { useState, useEffect } from 'react';

import { sum } from '@rush-monorepo/example-pkg-basic';
import { ExampleFeatComp } from '@rush-monorepo/example-feat-comp';

export default function IndexPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('@rush-monorepo/example-pkg-basic: sum 1 and 1 = ', sum(1, 1));
  }, [count]);

  return (
    <div>
      <h1>Welcome!</h1>
      <button onClick={() => setCount((c) => c + 1)}>click me</button>
      <p>count: {count}</p>
      <ExampleFeatComp />
    </div>
  );
}
