import type { NextPage } from "next";
import { signOut, useSession, signIn } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session, status);
  if (session) {
    return (
      <>
        <p>{JSON.stringify(session, null, 2)}</p>
        <img
          onClick={() => signOut()}
          src={session.user?.image ?? ""}
          alt="user-image"
        />
      </>
    );
  }
  return <button onClick={() => signIn()}>sign in</button>;
};

export default Home;
