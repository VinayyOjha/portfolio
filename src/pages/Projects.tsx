import { Card } from "@/components/common/Card"
import InterviewHive from "@/assets/project-interviewHive.png"
import CodeCrunch from "@/assets/project-CodeCrunch3.png"
import Eduflow from "@/assets/project-ICOSOM.png"
import animationLibrary from "@/assets/al.gif"

const Projects = () => {
  return (
    <div className="px-2 md:px-4">
      <div className="flex flex-col gap-4 text-white">
        {/* Heading */}
        <div className="text-2xl font-mono text-center">PROJECTS</div>

        {/* Projects */}
        <div className="gap-4 w-full grid grid-cols-1 sm:grid-cols-2 ">
          <Card image={CodeCrunch} projectName="CodeCrunch" projectDescription="...is a web applic that helps college students prepare for campus placements."/>
          <Card image={InterviewHive} projectName="Interview Hive" projectDescription="...is a web applic that helps college students prepare for campus placements."/>
          <Card image={Eduflow} projectName="EduFlow" projectDescription="...is a web applic that helps college students prepare for campus placements."/>
          <Card image={animationLibrary} projectName="Animata" projectDescription="...is a web applic that helps college students prepare for campus placements."/>
        </div>
      </div>
    </div>
  )
}

export default Projects