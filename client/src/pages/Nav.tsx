import { NewDate } from "@/components/common/NewDate"
import { useNavigate } from "react-router-dom"


const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="p-2 pt-4 sm:pt-0 md:p-4 flex justify-between font-mono text-blue-400">
      {/* Left Container */}
      <div className="flex flex-col items-start text-md gap-2">
        <div className="cursor-pointer font-mono underline underline-offset-4" onClick={()=>navigate('/blogs')}>
          [Blogs]
        </div>
        <div className="cursor-pointer font-mono underline underline-offset-4" onClick={()=>navigate('/projects')}>
          [Projects]
        </div>
        <div className="cursor-pointer font-mono underline underline-offset-4">
          [What Im upto now?]
        </div>
      </div>

      {/* Right Container */}
      <NewDate />
    </div>
  )
}

export default Nav