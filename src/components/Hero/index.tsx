import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white mt-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/images/kyro header.png")',
      }}
    >
      <div className="flex flex-col justify-center items-center text-center mx-auto px-4 lg:px-36 py-60">
        {/* Heading */}
        <div className="typewriter">
          <h1 className="md:whitespace-nowrap font-bold text-6xl md:text-7xl drop-shadow-lg">
            Wellcome to
          </h1>
          <div>
            <h1 className="write text-amber-500 font-bold text-6xl md:text-7xl drop-shadow-lg">
              Kyronode
            </h1>
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-zinc-300 drop-shadow-lg">
          Supporting Decentralized Networks with Reliable Infrastructure
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex space-x-4 ">
          <Link
            href="#"
            className="px-6 py-3 bg-amber-500 text-black rounded-lg shadow-lg hover:bg-amber-600 transition "
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
