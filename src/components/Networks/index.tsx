import Image from "next/image";

const Networks = () => {
  const networks = [
    {
      id: 1,
      image: "images/logo.svg",
      name: "Andromeda",
    },
    {
      id: 2,
      image: "images/logo.svg",
      name: "Archway",
    },
    {
      id: 3,
      image: "images/logo.svg",
      name: "AssetMantle",
    },
    {
      id: 4,
      image: "images/logo.svg",
      name: "Aura Network",
    },
    {
      id: 5,
      image: "images/logo.svg",
      name: "BitCanna",
    },
    {
      id: 6,
      image: "images/logo.svg",
      name: "Picasso",
    },
    {
      id: 7,
      image: "images/logo.svg",
      name: "Dymension Hub",
    },
  ];
  return (
    <section>
      <div className="content">
        <h2 className="text-3xl font-bold">Networks</h2>
        <div className="flex bg-zinc-500 dark:bg-zinc-300 h-px my-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4  ">
          {networks.map((network) => (
            <div
              key={network.id}
              className="flex flex-row gap-4 bg-white dark:bg-zinc-800 text-left items-center p-6 rounded-lg shadow-md transition hover:scale-105"
            >
              <Image
                src={network.image}
                alt={network.name}
                width={200}
                height={200}
                className="w-10 h-10 object-cover bg-amber-300 dark:bg-white rounded-full"
              />
              <h3 className="text-xl font-semibold ">{network.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
