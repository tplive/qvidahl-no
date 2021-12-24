// Copyright 2021 The Authors. Subject to the MIT license.
import { AppProps } from "next/app";
import "../styles/global.css";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
