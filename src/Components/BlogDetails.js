import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch";

export default function BlogDetails() {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blogDetails">
      {loading && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article className="article">
          <h2 className="article__title">{blog.title}</h2>
          <p className="article__body">{blog.body}</p>
          <small className="article__author">Written by - {blog.author}</small>
          <button className="article__btn" onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}
