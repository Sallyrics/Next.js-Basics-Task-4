import Link from "next/link";

export default function BlogPostPage() {
  return (
    <main>
      <h1>First Blog Post</h1>
      <p>
        This is a nested route created in Next.js App Router at /blog/post!
      </p>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
