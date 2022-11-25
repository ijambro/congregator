import Link from "next/link";
import Button from "./Button";

export declare interface NavProps {
  userName?: string;
  isLoggedIn: boolean;
  selectedPage?: string;
}

export default function Nav(props: NavProps) {
  const { userName, isLoggedIn, selectedPage } = props;

  return (
    <nav>
      <div className="w-full bg-orange-500 text-white font-bold px-12 py-4 flex flex-row justify-end items-center">
        <span>{userName ? "👋 Hello, " + userName : "⏳ Loading..."}</span>
        {isLoggedIn ? (
          <Link href="/login" className="mx-4">
            <Button label="Logout" />
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
