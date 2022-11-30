/* eslint-disable jsx-a11y/anchor-is-valid */
import { useGetPostsQuery } from '../api/postsApi';

export default function PostList({ setPostId }) {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Posts...
      </div>
    );
  }

  if (error) {
    return (
      <section className="alert alert-danger">
        Error fetching posts: {error.message}
      </section>
    );
  }

  return (
    <section>
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} setPostId={setPostId} />
        ))}
      </ul>
    </section>
  );
}

function PostItem({ post, setPostId }) {
  return (
    <li>
      <a onClick={() => setPostId(post.id)} href="#">
        {post.title}
      </a>
    </li>
  );
}
