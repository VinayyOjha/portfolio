import Separator from "@/components/common/Separator";
import { Acheivements } from "./Acheivements";
import { AlmaMater } from "./AlmaMater";
import Intro from "./Intro";
import Nav from "./Nav";
import Projects from "./Projects";
import { Skills } from "./Skills";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="container pb-8 min-h-screen max-w-3xl mx-auto border border-white/15">
        <div className="flex flex-col ">
          <Nav />
          <Separator />
          <Intro />
          <Separator />
          <AlmaMater />
          <Separator />
          <Projects />
          <Separator />
          <Skills />
          <Separator />
          <Acheivements />
        </div>
      </div>
    </div>
  );
};

export default Landing;
