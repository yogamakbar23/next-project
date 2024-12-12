"use client";

import { HardDrives } from "@phosphor-icons/react";

const Networks = () => {
  const networks = [
    {
      id: 1,
      name: "Andromeda",
      description: "AMD Ryzen™ 9 7950X3D",
    },
    {
      id: 2,
      name: "Blockchain",
      description: "AMD Ryzen™ 9 7950X3D",
    },
    {
      id: 3,
      name: "Blockchain",
      description: "AMD Ryzen™ 9 7950X3D",
    },
    {
      id: 4,
      name: "Blockchain",
      description: "AMD Ryzen™ 9 7950X3D",
    },
  ];
  return (
    <section>
      <div className="content">
        <h2 className="text-3xl font-bold">My Server</h2>
        <div className="flex bg-gray-300 h-px my-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  ">
          {networks.map((network) => (
            <div
              key={network.id}
              className="flex flex-col bg-gray-700 text-center justify-center items-center p-6 rounded-lg shadow-md transition hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2">{network.name}</h3>
              <p className="text-gray-300">{network.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
