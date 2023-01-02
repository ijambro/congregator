import Image from "next/image";
import Link from "next/link";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import Pane from "../components/Pane";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthProvider";
// import { query } from "../utils/data-helper";

export default function Home(/*props: any*/) {
  // console.log("Rendering Home with server side props", props);

  const authContext = useContext(AuthContext);
  console.log("Rendering Home using authContext", authContext);

  // const [name, setName] = useState(undefined);

  const [events, setEvents] = useState<Array<string>>([]);
  const eventFormRef = useRef<HTMLFormElement>(null);

  // const fetchName = async () => {
  //   console.log("Fetching name");
  //   const res = await fetch("/api/hello");
  //   console.log("Fetched name", res);
  //   const json = await res.json();
  //   console.log("Fetched name JSON", json);
  //   return json.name;
  // };

  // useEffect(() => {
  //   (async () => {
  //     const fetchedName = await fetchName();
  //     setName(fetchedName);
  //   })();
  // }, []);

  const addEvent = (event: FormEvent) => {
    console.log("addEvent");
    event.preventDefault();

    const title = eventFormRef.current?.["eventTitle"]?.value;
    console.log("addEvent with title: ", title);
    if (title) {
      setEvents(currEvents => [...currEvents, title]);
    }
  };

  return (
    <div>
      <PageHead />

      <Header />

      <Nav
        userName={authContext.authenticatedUser?.firstName}
        isLoggedIn={true}
      />

      <main className="flex flex-col items-center justify-items-start bg-gray-200">
        <h1 className="text-3xl mt-8">Events for every day 🎉</h1>

        <Pane title="+ Create new event">
          <form
            onSubmit={addEvent}
            ref={eventFormRef}
            className="bg-white px-12 py-4"
          >
            <p>Form goes here!</p>
            <p>Another line goes here!</p>
            <input name="eventTitle" type={"text"} placeholder="Event title" />
            <input
              name="eventDescription"
              type={"text"}
              placeholder="Description"
            />
            <Button label="Create Event" />
          </form>
        </Pane>

        <div className={styles.grid}>
          {events.map(event => (
            <a
              key={event}
              href="https://nextjs.org/docs"
              className={styles.card}
            >
              <h2>{event}</h2>
              <p>More details &rarr;</p>
            </a>
          ))}
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

// Experimented with server-side props querying Postgres data.
// This works locally, but NOT on Cloudflare Pages because server-side code and APIs use Edge Runtime.
// This MAY work on Vercel, but haven't tried that yet.
// export async function getServerSideProps(context) {
//   console.log("[getServerSideProps] Querying...");
//   const result = await query("SELECT * FROM transport");
//   console.log("Query result", result);
//   return { props: { rows: result.rows, rowCount: result.rowCount } };
// }
