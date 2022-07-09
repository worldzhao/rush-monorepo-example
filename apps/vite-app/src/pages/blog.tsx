import { Link, Outlet } from 'react-router-dom';

const BlogLayout: React.FC = () => {
  return (
    <div>
      <Link to="/blog/new">click to create post</Link>
      <br />
      <Link to="/blog/123">click to post detail</Link>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
