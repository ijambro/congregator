import { FormEvent, useContext, useRef, useState } from "react";
import Router from "next/router";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Link from "next/link";
import Pane from "../components/Pane";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthProvider";
import { DataContext } from "../context/DataProvider";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Login() {
  const authContext = useContext(AuthContext);
  const dataContext = useContext(DataContext);
  console.log(
    "Rendering Login using authenticatedUser",
    authContext.authenticatedUser,
    "all users",
    dataContext.users
  );

  const loginFormRef = useRef<HTMLFormElement>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const onLogin = (event: FormEvent) => {
    console.log("onLogin");
    event.preventDefault();

    const email = loginFormRef.current?.["email"]?.value;
    const password = loginFormRef.current?.["password"]?.value;
    console.log("Login with user/password: ", email, password);
    if (email && password) {
      console.log("Logging in!");
      setLoginError(null);

      //TODO: Authenticate against a server API for real!
      const foundMatchingUser = dataContext.users.find(
        u => u.email === email && u.passwordHash === password
      );

      if (foundMatchingUser) {
        authContext.setAuthenticatedUser(foundMatchingUser);
        Router.push("/");
      } else {
        setLoginError("Incorrect email or password");
      }
    } else {
      setLoginError("Email and password are required");
    }
  };

  return (
    <div>
      <PageHead />

      <Header />

      <main className={"flex flex-col items-center bg-gray-200"}>
        <Pane title="👤 Login" bigVerticalMargin>
          <form
            onSubmit={onLogin}
            ref={loginFormRef}
            className="bg-white px-12 py-4"
          >
            {loginError ? <p className="text-red-400">{loginError}</p> : null}

            <input name="email" type={"email"} placeholder="Email" />
            <input name="password" type={"password"} placeholder="Password" />

            <Button label="Login" />

            <div className="text-gray-300 ">
              <Link href="/register" className="text-blue-500">
                Create Account
              </Link>
              &nbsp;|&nbsp;
              <Link href="/forgot-password" className="text-blue-500">
                Forgot Password
              </Link>
              &nbsp;|&nbsp;
              <Link href="/about" className="text-blue-500">
                About Congregator
              </Link>
            </div>
          </form>
        </Pane>

        <Player
          autoplay
          loop
          src="/crocodile-walking-edited-colors.json"
          style={{ height: "300px", width: "300px" }}
        />
      </main>
    </div>
  );
}
