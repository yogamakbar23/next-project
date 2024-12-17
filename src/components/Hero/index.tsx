import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white mt-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/images/background.png")',
      }}
    >
      <div className="flex flex-col justify-center items-center text-center mx-auto px-4 lg:px-36 py-52">
        {/* Heading */}
        <div className="typewriter">
          <h1 className="md:whitespace-nowrap font-bold text-6xl md:text-7xl drop-shadow-lg">
            Welcome to
          </h1>
          <div>
            <h1 className="write text-amber-300 dark:text-amber-500 font-bold text-6xl md:text-7xl drop-shadow-lg">
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
        <div className="mt-8 flex space-x-4 ">
          <Link
            href="#"
            className="px-6 py-3 bg-amber-300 dark:bg-amber-500 text-black rounded-lg shadow-lg hover:bg-amber-500 dark:hover:bg-amber-600 transition "
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
