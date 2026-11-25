'use cache';

export default async function BlogPage() {
  const response = await fetch('http://localhost:3000/api/users');
  const posts = await response.json();

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </main>
  );
}
