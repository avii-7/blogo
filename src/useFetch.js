import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;
    // Associate/bind AbortController with fetch
    fetch(url, { signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the resource from the server.");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        // Recognize Abort Error
        if (!signal.aborted) {
          setLoading(false);
          setError(e.message);
        }
      });
    //clean up funciton
    return () => {
      // when we abort it throw error
      abortCont.abort();
    };
  }, [url]);
  return { data, loading, error };
}

//http://localhost:8000/blogs/
