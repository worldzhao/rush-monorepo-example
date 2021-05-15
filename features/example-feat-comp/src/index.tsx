import React from 'react';

export const ExampleFeatComp = () => {
  return (
    <div>
      <p>
        Feature means the package that do not need to be released, only reused in this Monorepo.
      </p>
      <p>
        Also, the package do not need to be built, just replace the `main` field in package.json
        with the source code entry, like "src/index.tsx".
      </p>
      <p>Just configure the host app webpack config to build our features.</p>
    </div>
  );
};
