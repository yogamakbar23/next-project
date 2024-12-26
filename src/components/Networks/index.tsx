import Image from "next/image";

const Networks = () => {
  const networks = [
    {
      id: 1,
      image: "/images/Networks/galactica.jpg",
      name: "Galactica",
    },
    {
      id: 2,
      image: "/images/Networks/nubit.jpg",
      name: "Nubit",
    },
    {
      id: 3,
      image: "/images/Networks/og.jpg",
      name: "Og",
    },
    {
      id: 4,
      image: "/images/Networks/pell.png",
      name: "Pell",
    },
    {
      id: 5,
      image: "/images/Networks/pryzm.jpg",
      name: "Pryzm",
    },
    {
      id: 6,
      image: "/images/Networks/swisstronic.jpg",
      name: "Swisstronik",
    },
    {
      id: 7,
      image: "/images/Networks/warden.png",
      name: "Warden",
    },
    {
      id: 8,
      image: "/images/Networks/zenrock.png",
      name: "Zenrock",
    },
  ];
  return (
    <section>
      <div className="content">
        <h2 className="text-3xl font-bold">Networks</h2>
        <div className="flex bg-zinc-500 dark:bg-zinc-300 h-px my-5"></div>
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
              <button className="px-4 py-2 border-2 w-full rounded hover:text-white hover:bg-amber-700 dark:hover:text-black dark:hover:bg-amber-600">
                STAKE!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
