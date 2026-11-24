import Link from "next/link";
import styles from "./home/home.module.css";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import AppLayout from "./components/AppLayout";
import Alert from "./components/Alert";

export default function Home() {
  return (
    <AppLayout>
      <Navigation />
      <main className={styles.container}>
        <Alert />
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

        <Card
          bgColor="#0070f3"
          title="Blue Card"
          description="Styled dynamically with a blue background."
        />
        <Card
          bgColor="#10b981"
          title="Green Card"
          description="Styled dynamically with a green background."
        />
      </main>
    </AppLayout>
  );
}
