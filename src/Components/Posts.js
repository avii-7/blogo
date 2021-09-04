import { Link } from "react-router-dom";

export default function Posts({ category, blogs }) {
  return (
    <div className="posts">
      <h1 className="posts__category">{category}</h1>
      {blogs.map((blog) => (
        <div className="posts__post" key={blog.id}>
          <Link className="posts__link" to={`/blogs/${blog.id}`}>
            <h2 className="posts__title">{blog.title}</h2>
            <small className="posts__author">Written by - {blog.author}</small>
          </Link>
        </div>
      ))}
    </div>
  );
}
