import { Acheivements } from "./Acheivements";
import { Blogs } from "./Blogs";
import Intro from "./Intro";
import Nav from "./Nav";
import Projects from "./Projects";
import { Skills } from "./Skills";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="container min-h-screen max-w-2xl mx-auto border border-white/30">
        <div className="flex flex-col gap-16">
          <Nav />
          <Intro />
          <Projects />
          <Blogs />
          <Skills />
          <Acheivements />
        </div>
      </div>
    </div>
  );
};

export default Landing;
