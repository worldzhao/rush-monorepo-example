import { Link, Outlet } from 'react-router-dom';

const GlobalLayout: React.FC = () => {
  return (
    <div>
      <header className="bg-blue-500 text-white">
        <h2 className="text-xl">Navigation</h2>
        <Link to="/">click to home</Link>
        <br />
        <Link to="/blog">click to blog</Link>
      </header>
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
