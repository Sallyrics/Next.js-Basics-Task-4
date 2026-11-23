import Link from "next/link";
import styles from "./home/home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Sally&apos;s Next.js Portfolio</h1>
      <p className={styles.description}>
        Welcome to my Next.js application! I built this site to practice
        modern web development, routing, and React components.
      </p>
      <Link href="/about" className={styles.link}>
        Go to About Page
      </Link>
    </main>
  );
}
