import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <PageHead />

      <Header />

      <main className={"w-full flex place-content-center bg-yellow-300"}>
        <div className="w-1/2 min-w-min border-l-8 border-l-orange-500 rounded-br-3xl overflow-hidden my-24">
          <div className="w-full bg-orange-500 text-white font-bold px-12 py-4 flex flex-row justify-middle">
            <span>👤 Login</span>
          </div>
          <form className="bg-white px-12 py-4">
            <input name="email" type={"email"} placeholder="Email" />
            <input name="password" type={"password"} placeholder="Password" />
            <Link href="/">
              <button className="bg-pink-600 text-white p-4 mx-4">Login</button>
            </Link>
            <br></br>
          </form>
        </div>
      </main>
    </div>
  );
}
