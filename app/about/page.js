import Link from "next/link";
import Navigation from "../components/Navigation";

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <main>
        <h1>About this course</h1>
        <p>
          This course covers the fundamentals of building modern web applications
          with Next.js, including routing, styling, API routes, and rendering.
        </p>
        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
