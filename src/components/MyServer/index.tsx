"use client";

import { HardDrives } from "@phosphor-icons/react";

const MyServer = () => {
  const servers = [
    {
      id: 1,
      name: "Hetzner VPS",
      cpu: "AMD Ryzen™ 9 7950X3D",
      ram: "128GB DDR5 ECC",
      storage: "2x2TB NVMe Gen 4",
      bandwith: "1Gbps",
    },
    {
      id: 2,
      name: "Hetzner VPS",
      cpu: "AMD Ryzen™ 9 7950X3D",
      ram: "128GB DDR5 ECC",
      storage: "2x2TB NVMe Gen 4",
      bandwith: "1Gbps",
    },
    {
      id: 3,
      name: "Hetzner VPS",
      cpu: "AMD Ryzen™ 9 7950X3D",
      ram: "128GB DDR5 ECC",
      storage: "2x2TB NVMe Gen 4",
      bandwith: "1Gbps",
    },
    {
      id: 4,
      name: "Home Server -  DELL R540",
      cpu: "AMD Ryzen™ 9 7950X3D.",
      ram: "128GB DDR5 ECC",
      storage: "2x2TB NVMe Gen 4",
      bandwith: "1Gbps",
    },
    {
      id: 5,
      name: "Hetzner VPS",
      cpu: "AMD Ryzen™ 9 7950X3D",
      ram: "128GB DDR5 ECC",
      storage: "2x2TB NVMe Gen 4",
      bandwith: "1Gbps",
    },
    {
      id: 6,
      name: "Hetzner VPS",
      cpu: "AMD Ryzen™ 9 7950X3D",
      ram: "128GB DDR5 ECC",
      storage: "2x2TB NVMe Gen 4",
      bandwith: "1Gbps",
    },
  ];
  return (
    <section>
      <div className="content">
        <h2 className="text-3xl font-bold">My Server</h2>
        <div className="flex bg-zinc-500 dark:bg-zinc-300 h-px my-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  ">
          {servers.map((server) => (
            <div
              key={server.id}
              className="flex flex-col text-center justify-center items-center bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md transition hover:scale-105"
            >
              <HardDrives size={62} />
              <h3 className="text-xl font-semibold mb-2">{server.name}</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                CPU: {server.cpu}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                RAM: {server.ram}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Storage: {server.storage}
              </p>
              <p className="text-zinc-700 dark:text-zinc-300">
                Bandwith: {server.bandwith}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServer;
