import Image from "next/image";

const Networks = () => {
  const networks = [
    {
      id: 1,
      image: "images/logo.svg",
      name: "Andromeda",
      apr: "soon",
    },
    {
      id: 2,
      image: "images/logo.svg",
      name: "Archway",
      apr: "3.9%",
    },
    {
      id: 3,
      image: "images/logo.svg",
      name: "AssetMantle",
      apr: "60%",
    },
    {
      id: 4,
      image: "images/logo.svg",
      name: "Aura Network",
      apr: "infinity",
    },
    {
      id: 5,
      image: "images/logo.svg",
      name: "BitCanna",
      apr: "62%",
    },
    {
      id: 6,
      image: "images/logo.svg",
      name: "Picasso",
      apr: "6.1%",
    },
    {
      id: 7,
      image: "images/logo.svg",
      name: "Dymension Hub",
      apr: "3.6%",
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
              className="flex flex-col gap-4 bg-white dark:bg-zinc-800 text-left items-start p-6 rounded-lg shadow-md transition hover:scale-105"
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
              <p className="text-xl text-zinc-700 dark:text-zinc-300">
                {" "}
                APR: {network.apr}
              </p>
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
