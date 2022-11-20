import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Link from "next/link";
import Pane from "../components/Pane";

export default function Login() {
  return (
    <div>
      <PageHead />

      <Header />

      <main className={"flex place-content-center bg-gray-200"}>
        <Pane title="👤 Login" bigVerticalMargin>
          <form className="bg-white px-12 py-4">
            <input name="email" type={"email"} placeholder="Email" />
            <input name="password" type={"password"} placeholder="Password" />
            <Link href="/">
              <button className="bg-pink-600 text-white p-4">Login</button>
            </Link>
          </form>
        </Pane>
      </main>
    </div>
  );
}
