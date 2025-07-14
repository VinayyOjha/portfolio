import { SkillsTags } from '@/components/common/SkillsTags'

export const Skills = () => {
  return (
    <div className="px-2 md:px-4">
      <div className="flex flex-col gap-8 font-mono text-white">
        {/* Heading */}
        <div className="text-2xl font-bold text-center">SKILLS</div>

        {/* Skills */}
        <div className="flex-wrap w-full">
          <SkillsTags className="px-2 py-1  gap-1 sm:gap-2 sm:text-sm flex flex-row text-xs  items-center rounded-sm border border-white/15 w-fit bg-white/90 text-black"/>
        </div>
      </div>
    </div>
  )
}
