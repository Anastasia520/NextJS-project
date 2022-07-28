import Head from "next/head";
import A from "./A";

export default function MainContainer({ children }) {
  return (
    <>
      <Head>
        <meta keywords="next js" />
        <title>Main page</title>
      </Head>

      <div className="navbar">
        <A href="/" text="Main page" />
        <A href="/users" text="Users page" />
      </div>
      <div>{children}</div>
      <style jsx>{`
        .navbar {
          background: #f5dd9d;
          padding: 16px;
        }
      `}</style>
    </>
  );
}
