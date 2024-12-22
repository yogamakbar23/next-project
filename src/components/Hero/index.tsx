"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/components/Hero/Hero.module.css";

const Hero: React.FC = () => {
  const [dotsVisible, setDotsVisible] = useState<boolean[]>(
    Array(10).fill(true)
  );
  const [dotPositions, setDotPositions] = useState<any[]>([]);

  useEffect(() => {
    // Only run on the client, generate random positions
    const positions = Array.from({ length: 10 }).map(() => ({
      startX: Math.random(),
      startY: Math.random(),
      endX: Math.random() - 0.5,
      endY: Math.random() - 0.5,
      randomDuration: `${Math.random() * 5 + 5}s`,
    }));
    setDotPositions(positions);
  }, []);

  const handleDotClick = (index: number) => {
    setDotsVisible((prev) => {
      const updated = [...prev];
      updated[index] = false;
      return updated;
    });
  };

  const dots = dotPositions.map((dot, index) => {
    return (
      dotsVisible[index] && (
        <div
          key={index}
          className={styles.dot}
          style={
            {
              "--start-x": dot.startX,
              "--start-y": dot.startY,
              "--end-x": dot.endX,
              "--end-y": dot.endY,
              "--random-duration": dot.randomDuration,
            } as React.CSSProperties
          }
          onClick={() => handleDotClick(index)}
        >
          <Image
            src="images/logo.svg"
            width={70}
            height={70}
            priority={false}
            alt=""
          />
        </div>
      )
    );
  });

  return (
    <section className={`bg-cover bg-center mt-16 ${styles.hero}`}>
      <div className={styles.dotsContainer}>{dots}</div>
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
          <a
            href="#"
            className="px-6 py-3 bg-amber-700 dark:bg-amber-500 text-white dark:text-black rounded-lg shadow-lg hover:bg-amber-900 dark:hover:bg-amber-600 transition"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
