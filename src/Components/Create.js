import { useState } from "react";
import { useHistory } from "react-router";

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Yusi");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    setLoading(true);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2 className="create__heading">Add a new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label className="create__label">Blog title: </label>
        <input
          className="create__titleBox"
          type="text"
          placeholder="Enter title of blog..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="create__label">Blog body: </label>
        <textarea
          className="create__bodyBox"
          value={body}
          rows="10"
          placeholder="Enter body of blog..."
          onChange={(e) => {
            setBody(e.target.value);
          }}></textarea>
        <label className="create__label"> Blog author: </label>
        <select
          className="create__author"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}>
          <option value="Yusi">Yusi</option>
          <option value="Billie">Billie</option>
        </select>
        <button disabled={loading} className="create__btn">
          {loading ? "Adding" : `Add Blog`}
        </button>
      </form>
    </div>
  );
}
