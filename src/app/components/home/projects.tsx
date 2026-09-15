import ProjectCard from "../projectcard";

const projects = [
  {
    project: "FinTrack",
    description:
      "Finance tracker web app,\nmade with Next.js, TailwindCSS, PHP and MySQL with Docker support.",
    img_src: [
      "/projects/fintrack/1.png",
      "/projects/fintrack/2.png",
      "/projects/fintrack/3.png",
    ],
    img_alt: "FinTrack screenshot",
    source: "https://github.com/tatu16/FinTrack",
  },
  {
    project: "Kyselypeli",
    description:
      "A quiz game web app in Finnish for learning purposes, idea from Taitaja2025 semifinal, made with Next.js, TailwindCSS, PHP, MySQL",
    img_src: [
      "/projects/kyselypeli/1.png",
      "/projects/kyselypeli/2.png",
      "/projects/kyselypeli/3.png",
      "/projects/kyselypeli/4.png",
      "/projects/kyselypeli/5.png",
    ],
    img_alt: "Kyselypeli screenshot",
    source: "https://github.com/tatu16/taitaja2025",
  },
];

export default function Projects() {
  return (
    <section>
      <h1
        id="projects"
        className="text-center text-4xl font-sans font-semibold my-4"
      >
        Projects
      </h1>
      {projects.map(({ img_alt, img_src, project, source, description }) => (
        <ProjectCard
          key={project}
          img_alt={img_alt}
          description={description}
          img_src={img_src}
          project={project}
          source={source}
        />
      ))}
    </section>
  );
}
