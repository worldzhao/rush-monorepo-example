import { ExampleFeatComp } from '@rush-monorepo/example-feat-comp';

const Home: React.FC = () => {
  return (
    <div className="text-lime-900">
      <span>Content: Home - text from @rush-monorepo/example-feat-comp</span>
      <div className="text-lime-500">
        <ExampleFeatComp />
      </div>
    </div>
  );
};

export default Home;
