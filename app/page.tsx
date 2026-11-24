import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <Navigation />
      <main className={styles.container}>
        <Title />
        <h1 className={styles.title}>Sally&apos;s Next.js Portfolio</h1>
        <p className={styles.description}>
          Welcome to my Next.js application! I built this site to practice
          modern web development, routing, and React components.
        </p>
        <Link href="/about" className={styles.link}>
          Go to About Page
        </Link>
        <Button />
      </main>
    </div>
  );
}
