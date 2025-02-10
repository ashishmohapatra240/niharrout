import Marquee from "react-fast-marquee";

const MarqueeStrip = () => {
  const projects = [
    "Custom Software Development",
    "Mobile App Development",
    "UI/UX Design",
    "Web App Development",
    "DevOps & Cloud",
    "QA & Automation",
    "API Development & Integration",
    "Data Engineering & BI",
  ];

  return (
    <section className="py-6 bg-neutral-100">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        className="overflow-hidden"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-white font-medium px-2 text-xl flex items-center gap-2"
          >
            {project}

            <span className="ml-2 w-3 h-3 bg-white rounded-full inline-block"></span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeStrip;
