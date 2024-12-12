import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center text-white mt-16"
      style={{
        backgroundImage: 'url("/images/hero_background2.jpg")', // Ganti dengan path gambar Anda
      }}
    >
      <div className="container mx-auto px-36 py-60">
        {/* Heading */}
        <h1 className="text-4xl font-bold md:text-6xl drop-shadow-lg">
          Welcome to <span className="text-blue-500">Notulensi</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl text-gray-300 drop-shadow-lg">
          Build modern and powerful web applications with ease.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex space-x-4 ">
          <Link
            href="#"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition "
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
