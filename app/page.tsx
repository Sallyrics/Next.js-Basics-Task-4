import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Sally&apos;s Next.js Portfolio</h1>
      <p>
        Welcome to my Next.js application! I built this site to practice
        modern web development, routing, and React components.
      </p>
      <Link href="/about">Go to About Page</Link>
    </main>
  );
}
