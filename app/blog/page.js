export const revalidate = 10;

export default async function BlogPage() {
  const response = await fetch('http://localhost:3000/api/users', {
    next: { revalidate: 10 },
  });
  const posts = await response.json();
  const timestamp = new Date().toLocaleTimeString();

  return (
    <main>
      <h1>Blog Posts</h1>
      <p>Last updated: {timestamp}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </main>
  );
}
