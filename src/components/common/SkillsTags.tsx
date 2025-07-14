import Tags from "./Tags";

const skillArray = [
  { label: "Git", imgSrc: "https://cdn.simpleicons.org/git" },
  { label: "Java", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { label: "SpringBoot", imgSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/springboot.svg" },
  { label: "C/C++", imgSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg" },
  { label: "React", imgSrc: "https://cdn.simpleicons.org/react" },
  { label: "Typescript", imgSrc: "https://cdn.simpleicons.org/typescript" },
  { label: "LangChain", imgSrc: "https://cdn.simpleicons.org/langchain" }, // Not available officially
  { label: "Python", imgSrc: "https://cdn.simpleicons.org/python" },
  { label: "Langgraph", imgSrc: "https://cdn.simpleicons.org/langgraph" }, // Not available officially
  { label: "Postgres", imgSrc: "https://cdn.simpleicons.org/postgresql" },
  { label: "Docker", imgSrc: "https://cdn.simpleicons.org/docker" },
  { label: "Express", imgSrc: "https://cdn.simpleicons.org/express" },
  { label: "NextJs", imgSrc: "https://cdn.simpleicons.org/nextdotjs" },
];

export const SkillsTags = ({ className }: { className?: string }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center ">
      {skillArray.map((skill) => (
        <Tags key={skill.label} label={skill.label} imgSrc={skill.imgSrc} className={className}/>
      ))}
    </div>
  );
};
