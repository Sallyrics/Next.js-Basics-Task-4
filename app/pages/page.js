export default async function BlogPage() {
  const posts = [
    { id: 1, title: 'Sally' },
    { id: 2, title: 'David' },
  ];

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}
