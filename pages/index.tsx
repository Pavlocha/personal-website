import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <Head>
        <title>Who this is dev ?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center  text-center">
        <h1 className="text-6xl font-bold">
          Hello ! Moi c&apos;est
          <a className="text-red-600" href="/cv.pdf">
            {" "}
            Mehdi
          </a>{" "}
          en 4 phrases :
        </h1>

        <ul className=" items mt-8 flex-col ">
          <li className="mt-3 text-left text-3xl">
            {" "}
            💡 J&apos;adore donner vie à des{" "}
            <span className="font-bold text-red-600">idées</span>
          </li>
          <li className="mt-3 text-left text-3xl">
            {" "}
            ⚙️ En utilisant des{" "}
            <span className="font-bold text-red-600">outils</span> modernes{" "}
          </li>
          <li className="mt-3 text-left text-3xl">
            📣 Le tout en{" "}
            <span className="font-bold text-red-600">partageant</span> ce que
            j&apos;apprends
          </li>
          <li className="mt-3 text-left text-3xl">
            🤝 Avec des personnes{" "}
            <span className="font-bold text-red-600">motivées</span>
          </li>
          
        </ul>
        <div className="mt-20  text-4xl font-bold content-center">
          Si ça te parle n&apos;hésite pas à me  <a className="font-bold text-red-600" href="https://www.linkedin.com/in/himmid-mehdi/">contacter</a>{" "}
        </div>
      </main>
    </div>
  );
};

export default Home;
