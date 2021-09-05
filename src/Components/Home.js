import Posts from "./Posts";
import useFetch from "../useFetch";

export default function Home() {

  const { data: blogs, loading, error } = useFetch("http://localhost:8000/blogs/");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {loading && <div>Loading...</div>}
      {blogs && <Posts blogs={blogs} category="All Blogs" />}
    </div>
  );
}
