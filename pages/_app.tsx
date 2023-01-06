import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "../context/AuthProvider";
import DataProvider from "../context/DataProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DataProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </DataProvider>
  );
}
