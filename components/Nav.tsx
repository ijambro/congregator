import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Button from "./Button";

export declare interface NavProps {
  userName?: string;
  isLoggedIn: boolean;
  selectedPage?: string;
}

export default function Nav(props: NavProps) {
  const { userName, isLoggedIn, selectedPage } = props;

  const authContext = useContext(AuthContext);

  const onLogout = () => {
    authContext.setAuthenticatedUser(undefined);
  };

  return (
    <nav>
      <div className="w-full bg-orange-500 text-white font-bold px-12 py-4 flex flex-row justify-end items-center">
        <span>{userName ? "👋 Hello, " + userName : "⏳ Loading..."}</span>
        {isLoggedIn ? (
          <Link href="/login" className="mx-4">
            <Button label="Logout" onClick={onLogout} />
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
