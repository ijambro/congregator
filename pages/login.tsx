import { FormEvent, useRef } from "react";
import Router from "next/router";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Link from "next/link";
import Pane from "../components/Pane";

export default function Login() {
  const loginFormRef = useRef<HTMLFormElement>(null);

  const onLogin = (event: FormEvent) => {
    console.log("onLogin");
    event.preventDefault();

    const email = loginFormRef.current?.["email"]?.value;
    const password = loginFormRef.current?.["password"]?.value;
    console.log("Login with user/password: ", email, password);
    if (email && password) {
      console.log("Logging in!");
      Router.push("/");
    }
  };

  return (
    <div>
      <PageHead />

      <Header />

      <main className={"flex place-content-center bg-gray-200"}>
        <Pane title="👤 Login" bigVerticalMargin>
          <form
            onSubmit={onLogin}
            ref={loginFormRef}
            className="bg-white px-12 py-4"
          >
            <input name="email" type={"email"} placeholder="Email" />
            <input name="password" type={"password"} placeholder="Password" />
            {/* <Link href="/"> */}
            <button className="bg-pink-600 text-white p-4">Login</button>
            {/* </Link> */}
          </form>
        </Pane>
      </main>
    </div>
  );
}
