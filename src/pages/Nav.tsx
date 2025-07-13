import { NewDate } from "@/components/common/NewDate"


const Nav = () => {
  return (
    <div className="p-2 md:p-4 flex justify-between text-blue-400">
      {/* Left Container */}
      <div className="flex flex-col items-start gap-2">
        <div className="font-mono underline underline-offset-4">
          [Blog]
        </div>
        <div className="font-mono underline underline-offset-4">
          [Projects]
        </div>
        <div className="font-mono underline underline-offset-4">
          [What Im upto now?]
        </div>
      </div>

      {/* Right Container */}
      <NewDate />
    </div>
  )
}

export default Nav