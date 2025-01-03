import Image from "next/image";
import Link from "next/link";

const Networks = () => {
  const networks = [
    {
      id: 1,
      image: "/images/Networks/galactica.jpg",
      name: "Galactica",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/galactica",
    },
    {
      id: 2,
      image: "/images/Networks/nubit.jpg",
      name: "Nubit",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/nubit",
    },
    {
      id: 3,
      image: "/images/Networks/og.jpg",
      name: "Og",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/og",
    },
    {
      id: 4,
      image: "/images/Networks/pell.png",
      name: "Pell",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/pell",
    },
    {
      id: 5,
      image: "/images/Networks/pryzm.jpg",
      name: "Pryzm",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/pyrzm",
    },
    {
      id: 6,
      image: "/images/Networks/swisstronic.jpg",
      name: "Swisstronik",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/swisstronik",
    },
    {
      id: 7,
      image: "/images/Networks/warden.png",
      name: "Warden",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/warden",
    },
    {
      id: 8,
      image: "/images/Networks/zenrock.png",
      name: "Zenrock",
      services: "/services",
      explorer: "https://testnet.kyronode.xyz/zenrock",
    },
    {
      id: 9,
      image: "/images/Networks/initia.jpg",
      name: "Initia",
      services: "/services",
      explorer: "/explorer",
    },
    {
      id: 10,
      image: "/images/Networks/dill.jpg",
      name: "Dill",
      services: "/services",
      explorer: "/explorer",
    },
  ];
  return (
    <section id="networks" className="scroll-mt-28">
      <div className="content">
        <h2 className="text-3xl font-bold">Networks</h2>
        <div className="flex bg-zinc-500 dark:bg-zinc-300 h-px my-5"></div>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">
          Total staked assets: &lt;$75.000
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  ">
          {networks.map((network) => (
            <div
              key={network.id}
              className="flex flex-col gap-6 bg-white dark:bg-zinc-800 text-left items-start p-8 rounded-lg shadow-md transition hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={network.image}
                  alt={network.name}
                  width={200}
                  height={200}
                  className="w-10 h-10 object-cover bg-amber-300 dark:bg-white rounded-full"
                />
                <h3 className="text-xl font-semibold ">{network.name}</h3>
              </div>
              <div className="flex flex-col sm:flex-row w-full gap-3">
                <Link
                  href={network.services}
                  className="px-4 py-2 border-2 w-full text-center rounded hover:text-white hover:bg-amber-700 dark:hover:text-black dark:hover:bg-amber-600"
                >
                  Service
                </Link>
                <Link
                  href={network.explorer}
                  className="px-4 py-2 border-2 w-full text-center rounded hover:text-white hover:bg-amber-700 dark:hover:text-black dark:hover:bg-amber-600"
                >
                  Explorer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
