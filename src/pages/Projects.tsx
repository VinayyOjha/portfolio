import Card from "@/components/common/Card";
import InterviewHive from "@/assets/project-interviewHive.png";
import CodeCrunch from "@/assets/project-CodeCrunch3.png";
import InstaMart from "@/assets/instamart.png";

const Projects = () => {
  return (
    <div className="px-2 md:px-4">
      <div className="flex flex-col gap-12 font-mono text-white">
        {/* Heading */}
        <div className="text-2xl font-bold text-center tracking-tight">
          PROJECTS
        </div>

        {/* Projects */}
        <div className="gap-6 w-full grid grid-cols-1 sm:grid-cols-2">
          
          <Card
            tagsClassName="bg-black text-white/70"
            imgSrc={InterviewHive}
            projectName="Interview Hive"
            projectDescription="...is a web applic that helps college students prepare for campus placements."
            tags={[
              "React+TS",
              "RAG",
              "LangChain",
              "VectorDB",
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
            websiteLink="https://interview-hive.dev-projects.site"
            githubLink="https://github.com/Maverick-08/InterviewHive"
            />
            <Card
            tagsClassName="bg-black text-white/70"
            imgSrc={CodeCrunch}
            projectName="CodeCrunch"
            tags={["React", "TypeScript ", "TailwindCSS", "Motion"]}
            projectDescription="A platofrm to mangae and organise Coding Contests."
            websiteLink="https://code-crunch-tau.vercel.app/"
            githubLink="https://github.com/VinayyOjha/CodeCrunch"
            />
          
          <Card
            tagsClassName="bg-black text-white/70"
            imgSrc={InstaMart}
            projectName="InstaMart"
            tags={["React", "TailwindCSS", "Java", "SpringBoot"]}
            projectDescription="A semi-full stack project to test out my learnigs with SpringBoot."
            githubLink="https://github.com/VinayyOjha/eCommerceApp-SpringBoot"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
