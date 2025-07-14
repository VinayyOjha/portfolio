import { Card } from "@/components/common/Card";
import InterviewHive from "@/assets/project-interviewHive.png";
import CodeCrunch from "@/assets/project-CodeCrunch3.png";
import Eduflow from "@/assets/project-ICOSOM.png";
import animationLibrary from "@/assets/al.gif";

const Projects = () => {
  return (
    <div className="px-2 md:px-4">
      <div className="flex flex-col gap-12 font-mono text-white">
        {/* Heading */}
        <div className="text-2xl font-bold text-center tracking-tight underline underline-offset-4">
          Projects
        </div>

        {/* Projects */}
        <div className="gap-6 w-full grid grid-cols-1 sm:grid-cols-2">
          <Card
            image={CodeCrunch}
            projectName="CodeCrunch"
            projectDescription="...is a web applic that helps college students prepare for campus placements."
            tags={[
              "React+TS",
              "RAG",
              "LangChain",
              "VectorDB",
              "Jenkins",
              "Zustand",
              "Resend",
              "Clerk",
              "Framer-Motion",
              "NodeJS",
              "Prisma",
              "Docker",
              "AWS S3",
              "Vercel",
            ]}
            website="https://interview-hive.dev-projects.site"
            github="https://github.com/Maverick-08/InterviewHive"
          />
          <Card
            image={InterviewHive}
            projectName="Interview Hive"
            projectDescription="...is a web applic that helps college students prepare for campus placements."
            tags={["React", "TypeScript ", "TailwindCSS"]}
            website="https://icosom-vives-projects-e2b6c210.vercel.app/"
            github="https://github.com/Maverick-08/icosom"
          />
          <Card
            image={Eduflow}
            projectName="EduFlow"
            projectDescription="...is a web applic that helps college students prepare for campus placements."
          />
          <Card
            image={animationLibrary}
            projectName="Animata"
            projectDescription="...is a web applic that helps college students prepare for campus placements."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
