import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <section className={`bg-cover bg-center mt-20 `}>
      {/* Content */}
      <div className="flex flex-col justify-center items-center text-center mx-auto px-4 lg:px-36 py-52">
        <div className="typewriter">
          <h1 className="md:whitespace-nowrap font-bold text-6xl md:text-7xl drop-shadow-lg">
            Welcome to
          </h1>
          <div>
            <h1 className="write text-amber-700 dark:text-amber-500 font-bold text-6xl md:text-7xl drop-shadow-lg">
              Kyronode
            </h1>
          </div>
        </div>
        <div className="px-4">
          <p className="mt-5 text-2xl md:text-4xl font-bold drop-shadow-lg">
            Securing the Future of Decentralized Networks
          </p>
          <p className="mt-3 text-lg md:text-lg dark:text-zinc-300 drop-shadow-lg">
            Delegate your assets securely and embrace transformative interchain
            solutions for growth
          </p>
        </div>
        <div className="z-10 mt-8 flex space-x-4">
          <Link
            href="#networks"
            className="w-32 px-6 py-3 bg-amber-700 dark:bg-amber-500 text-white dark:text-black rounded-lg shadow-lg hover:bg-amber-900 dark:hover:bg-amber-600 transition"
          >
            Networks
          </Link>
          <Link
            href="https://testnet.kyronode.xyz/"
            target="_blank"
            className="w-32 px-6 py-3 bg-zinc-300 dark:bg-zinc-800 text-black dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
          >
            Explorer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
