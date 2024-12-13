import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white mt-16"
      style={{
        backgroundImage: 'url("/images/kyro header.png")',
      }}
    >
      <div className="container mx-auto px-4 lg:px-36 py-60">
        {/* Heading */}
        <h1 className="font-bold text-6xl drop-shadow-lg">
          Welcome to <span className="text-amber-500">Kyronode</span>
        </h1>

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
