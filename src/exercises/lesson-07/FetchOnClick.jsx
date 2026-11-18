import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    setLoading(true);
    setError(null);

    getSinglePost(1)
      .then((data) => setPost(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick} disabled={loading}>
        Get post
      </button>
      <div className="content">
        {loading && <p>Loading post…</p>}
        {error && <p>Error: {error}</p>}
        {post && !loading && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
