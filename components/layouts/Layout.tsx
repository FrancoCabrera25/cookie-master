import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

type Props = {};

const Layout:FC<PropsWithChildren<Props>>= ({ children }) => {
  return (
    <>
      <Head>

      </Head>
      <nav>
        <Navbar />
      </nav>
      <main style={{ padding: "20px 50px" }}>
        {children}
      </main>
    </>
  );
};

export default Layout;
