import Layout from "@/components/layout";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <NextUIProvider>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </NextUIProvider>
    </>
  );
}
