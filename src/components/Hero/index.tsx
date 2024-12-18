import React from "react";
import Link from "next/link";
import styles from "@/components/Hero/Hero.module.css";

const Hero = () => {
  const dots = Array.from({ length: 50 }).map((_, index) => {
    const randomLeft = Math.random();
    const randomDelay = Math.random();
    return (
      <span
        key={index}
        className={styles.dot}
        style={
          {
            "--random-left": randomLeft,
            "--random-delay": randomDelay,
          } as React.CSSProperties
        }
      ></span>
    );
  });

  return (
    <section className={`bg-cover bg-center mt-16 ${styles.hero}`}>
      {/* Background Dots */}
      <div className={styles.dotsContainer}>{dots}</div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center text-center mx-auto px-4 lg:px-36 py-52">
        {/* Heading */}
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

        {/* Subtitle */}
        <div className="px-4">
          <p className="mt-5 text-2xl md:text-4xl font-bold drop-shadow-lg">
            Securing the Future of Decentralized Networks
          </p>

          <p className="mt-3 text-lg md:text-lg dark:text-zinc-300 drop-shadow-lg">
            Delegate your assets securely and embrace transformative interchain
            solutions for growth
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="z-10 mt-8 flex space-x-4">
          <Link
            href="#"
            className="px-6 py-3 bg-amber-700 dark:bg-amber-500 text-white dark:text-black rounded-lg shadow-lg hover:bg-amber-900 dark:hover:bg-amber-600 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
