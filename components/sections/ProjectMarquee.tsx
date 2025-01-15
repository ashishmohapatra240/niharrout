import Marquee from "react-fast-marquee";
import Image from "next/image";

const ProjectMarquee = () => {
  const projects = [
    "/images/projects-marquee/project1.png",
    "/images/projects-marquee/project2.png",
    "/images/projects-marquee/project3.png",
    "/images/projects-marquee/project4.png",
    "/images/projects-marquee/project5.png",
  ];

  return (
    <section className="py-8 bg-neutral-100">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={false}
        className="overflow-hidden"
      >
        {projects.map((project, index) => (
          <div key={index} className="mx-4">
            <Image
              src={project}
              alt={`Project ${index + 1}`}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ProjectMarquee;
