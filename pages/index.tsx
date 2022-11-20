import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import Pane from "../components/Pane";

export default function Home() {
  const [name, setName] = useState(undefined);
  const [events, setEvents] = useState<Array<string>>([]);

  const fetchName = async () => {
    console.log("Fetching name");
    const res = await fetch("/api/hello");
    console.log("Fetched name", res);
    const json = await res.json();
    console.log("Fetched name JSON", json);
    return json.name;
  };

  useEffect(() => {
    (async () => {
      const fetchedName = await fetchName();
      setName(fetchedName);
    })();
  }, []);

  return (
    <div>
      <PageHead />

      <Header />

      <Nav userName={name} isLoggedIn={true} />

      <main className="flex flex-col items-center justify-items-start bg-gray-200">
        <h1 className="text-3xl mt-8">Events for every day 🎉</h1>

        <Pane title="+ Create new event">
          <form className="bg-white px-12 py-4">
            <p>Form goes here!</p>
            <p>Another line goes here!</p>
            <input name="eventTitle" type={"text"} placeholder="Event title" />
            <input
              name="eventDescription"
              type={"text"}
              placeholder="Description"
            />
            <Link href="/">
              <button className="bg-pink-600 text-white p-4">
                Create Event
              </button>
            </Link>
          </form>
        </Pane>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
