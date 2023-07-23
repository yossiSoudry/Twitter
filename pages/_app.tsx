import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import EditModal from "@/components/modals/EditModal";
import { ContextProvider, useStateContext } from "@/context/context";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <SessionProvider session={pageProps.session}>
      <ContextProvider>
          <Toaster />
          <RegisterModal />
          <LoginModal />
          <EditModal />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ContextProvider>
    </SessionProvider>
  );
}
