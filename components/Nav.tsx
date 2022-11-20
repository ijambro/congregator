import Link from "next/link";

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
          <Link href="/login">
            <button className="bg-pink-600 text-white p-4 mx-4">Logout</button>
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
