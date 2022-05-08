import { Link, Outlet } from 'react-router-dom';

const BlogLayout: React.FC = () => {
  return (
    <>
      <div className="bg-blue-800 text-white">
        <h2 className="text-lg"> Nest Routing</h2>
        <Link to="/blog/new">click to create post</Link>
        <br />
        <Link to="/blog/123">click to post detail</Link>
      </div>
      <Outlet />
    </>
  );
};

export default BlogLayout;
