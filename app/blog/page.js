export const revalidate = 10;

export default async function BlogPage() {
  const posts = [
    { id: 1, title: 'Understanding Static Site Generation' },
    { id: 2, title: 'How Incremental Static Regeneration Works' },
    { id: 3, title: 'Server Components in Next.js' },
  ];

  const randomPost = posts[Math.floor(Math.random() * posts.length)];
  const timestamp = new Date().toLocaleTimeString();

  return (
    <main>
      <h1>Blog Posts (ISR Test)</h1>
      <p>Last updated: {timestamp}</p>
      <p>Featured item: {randomPost.title}</p>
    </main>
  );
}
