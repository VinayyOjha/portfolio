import Separator from "@/components/common/Separator";
import { Acheivements } from "./Acheivements";
import { Blogs } from "./Blogs";
import Intro from "./Intro";
import Nav from "./Nav";
import Projects from "./Projects";
import { Skills } from "./Skills";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="container min-h-screen max-w-3xl mx-auto border border-white/15">
        <div className=" flex flex-col ">
          <Nav />
          <Separator />
          <Intro />
          <Separator />
          <Projects />
          <Separator />
          <Blogs />
          <Separator />
          <Skills />
          <Separator />
          <Acheivements />
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default Landing;
