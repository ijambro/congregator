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
import { DataContext } from "../context/DataProvider";
// import { query } from "../utils/data-helper";

export default function Home(/*props: any*/) {
  // console.log("Rendering Home with server side props", props);

  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  console.log(
    "Rendering Home for authenticatedUser",
    authContext.authenticatedUser,
    "with events",
    dataContext.events
  );

  // const [name, setName] = useState(undefined);

  const eventFormRef = useRef<HTMLFormElement>(null);

  // TODO: Fetch real events from a server API

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
    if (title && authContext.authenticatedUser) {
      const nextEventId = dataContext.events.length
        ? dataContext.events[dataContext.events.length - 1].id + 1
        : 1000;
      dataContext.addEvent({
        id: nextEventId,
        createdDate: new Date(),
        updatedDate: new Date(),
        userId: authContext.authenticatedUser?.id,
        name: title
      });
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

        {dataContext.events.map(event => (
          <Pane key={event.id} title={"🎉 " + (event.name || "Untitled Event")}>
            <div className="bg-white px-12 py-4">
              <h2 className="text-pink-600 text-3xl">{event.name}</h2>
              <code>{JSON.stringify(event)}</code>
              <Link
                key={event.id}
                href={"/events/" + event.id}
                className="text-blue-500"
              >
                <p>More details &rarr;</p>
              </Link>
            </div>
          </Pane>
        ))}

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
