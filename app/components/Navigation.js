import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ display: "flex", gap: "1.5rem", padding: "1rem 2rem", borderBottom: "1px solid #374151" }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/post">Blog Post</Link>
    </nav>
  );
}
