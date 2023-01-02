import { FormEvent, useContext, useRef, useState } from "react";
import Router from "next/router";
import PageHead from "../components/PageHead";
import Header from "../components/Header";
import Link from "next/link";
import Pane from "../components/Pane";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthProvider";

export default function Login() {
  const authContext = useContext(AuthContext);
  console.log("Rendering Login using authContext", authContext);

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

      //TODO: Authenticate for real!
      const authSuccess = true;

      if (authSuccess) {
        authContext.setAuthenticatedUser({
          id: 1,
          email: email,
          firstName: "First",
          lastName: "Last",
          passwordHash: password
        });
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

      <main className={"flex place-content-center bg-gray-200"}>
        <Pane title="👤 Login" bigVerticalMargin>
          <form
            onSubmit={onLogin}
            ref={loginFormRef}
            className="bg-white px-12 py-4"
          >
            {loginError ? <p className="text-red-400">{loginError}</p> : null}

            <input name="email" type={"email"} placeholder="Email" />
            <input name="password" type={"password"} placeholder="Password" />

            {/* <Link href="/"> */}
            <Button label="Login" />
            {/* </Link> */}

            <div className="text-gray-300 whitespace-nowrap">
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
      </main>
    </div>
  );
}
