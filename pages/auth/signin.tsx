import type { NextPage } from "next";
import { Provider } from "next-auth/providers";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

interface SignInPageProps {
  providers: Provider[];
}

const SignInPage: NextPage<SignInPageProps> = ({ providers }) => {
  return (
    <div className="mt-40">
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="flex flex-col items-center">
          <p className="text-sm italic my-10 text-center">
            This website is created for learning purposes
          </p>
          <button
            className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInPage;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
