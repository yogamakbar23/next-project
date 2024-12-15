import Image from "next/image";

interface SkillBarProps {
  skillName: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skillName, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center font-medium ">
        <span>{skillName}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-zinc-700 h-2 rounded-full">
        <div
          className="bg-amber-300 dark:bg-amber-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const name = "Kyronode";
  const description =
    "I am a professional POS Node & Validator provider. I have experience in Testnet projects from early 2024. I always emphasize stability and always monitor the status. I look forward to collaborating on more projects. Please contact me to cooperate together.";

  return (
    <section>
      <div className="content">
        <h2 className="text-3xl font-bold ">About Me</h2>
        <div className="flex bg-zinc-500 dark:bg-zinc-300 h-px my-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Image
            className="h-auto w-full rounded object-cover"
            src="/images/20241205_230918.png"
            alt="Kyronode Logo"
            width={200}
            height={200}
            objectFit="cover"
          />
          <div className="flex flex-col w-full text-justify">
            <h2 className="font-bold text-xl text-lg mb-2">Name</h2>
            <p className="mb-6">{name}</p>
            <h2 className="font-bold text-xl mb-2 ">Description</h2>
            <p>{description}</p>
          </div>
          {/* garis vertikal */}
          {/* <div className="hidden lg:flex lg:flex-col justify-start items-center h-full mx-4">
            <div className="w-px bg-zinc-800 h-60"></div>
          </div> */}

          <div className="flex flex-col ">
            <h2 className="font-bold text-xl mb-2">Skills</h2>
            <SkillBar skillName="Install and config" percentage={95} />
            <SkillBar
              skillName="Operating system knowledge (Linux)"
              percentage={90}
            />
            <SkillBar
              skillName="Monitoring and troubleshooting"
              percentage={85}
            />
            <SkillBar skillName="Scripting and automation" percentage={85} />
            <SkillBar skillName="System optimization" percentage={80} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
