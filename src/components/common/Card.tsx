import { cn } from "@/lib/utils";
import Tags from "./Tags";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GithubLogoIcon, Globe } from "@phosphor-icons/react";
import { easeInOut, motion } from "motion/react";

const Card = ({
  className,
  tagsClassName,
  projectName,
  projectDescription,
  imageClasses,
  imgSrc,
  tags = [],
  websiteLink,
  githubLink,
}: {
  className?: string;
  tagsClassName?:string;
  projectName: string;
  projectDescription: string;
  imageClasses?: string;
  imgSrc: string;
  tags?: string[];
  websiteLink?: string;
  githubLink?: string;
}) => {
  const visibleTags = tags.slice(0, 7);
  const hiddenTags = tags.slice(7);
  // const navigate = useNavigate();

  return (
    <div
      className={cn(
        `group p-2 flex flex-col gap-4 justify-between rounded-sm col-span-1 border border-[#333333]/80 group-hover:border-[#333333]/90 group hover:shadow-md shadow-[#171717] transition-all duration-300 ease-in`,
        className
      )}
    >
      <div className="flex flex-col gap-4 ">
        {/* Image */}
        <div className="relative h-60 overflow-hidden group">
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ease: easeInOut }}
            src={imgSrc}
            alt="project1"
            className={cn(
              "object-cover h-full w-full rounded-sm group-hover:scale-102 transition-all duration-500",
              imageClasses
            )}
          />

          {/* Gradient overlay for bottom fade-out */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#171717]/90 to-transparent pointer-events-none rounded-b-sm" />
        </div>

        {/* Name and Description */}
        <div className="flex flex-col gap-2 items-start">
          {/* Text content */}
          <div className="gap-2 px-1 flex flex-col tracking-tight text-sm">
            <div className="font-bold font-mono text-xl text-white/90 group-hover:text-blue-400 transition-all  duration-400 ">
              {projectName}
            </div>{" "}
            <div className="group-hover:text-white/80 text-neutral-400 transition-all duration-300 ease-in">
              {projectDescription}
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 px-1">
              {visibleTags.map((tag, idx) => (
                <Tags
                  key={idx}
                  label={tag}
                  imgSrc="na"
                  className={cn(`h-fit italic`, tagsClassName)}
                />
              ))}

              {hiddenTags.length > 0 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="px-1 text-xs border border-white/20 bg-white/20 text-white/60 cursor-pointer font-mono italic">
                        {/* <Tags
                      label={`+${hiddenTags.length} more`}
                      className="bg-neutral-200 text-neutral-700 cursor-pointer h-fit"
                    /> */}
                        +{hiddenTags.length} more
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="flex flex-wrap gap-1 max-w-xs ">
                      {hiddenTags.map((tag, idx) => (
                        <Tags
                          key={idx}
                          label={tag}
                          className="text-xs px-1.5 py-0.5 "
                          imgSrc="na"
                        />
                      ))}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Website and Gtihub link */}
      <div className="mt-2 flex gap-2">
        {/* LiveLink */}
        <div
          onClick={() => window.open(websiteLink, "_blank")}
          className="p-1 flex gap-0.5 items-center border border-black/30 bgwhite/80 transition-all duration-300 cursor-pointer"
        >
          <div className="">
            <Globe size={16} color="white" />
          </div>
          <p className="text-blue-400 transition-all duration-500 text-[10px]">
            Website
          </p>
        </div>

        {/* Github */}
        <div
          onClick={() => window.open(githubLink, "_blank")}
          className="p-1 flex gap-0.5 items-center border border-black/30 transition-all duration-300 cursor-pointer"
        >
          <div className="">
            <GithubLogoIcon size={16} color="white" />
          </div>
          <p className="text-blue-500 transition-all duration-500 text-[10px]">
            Github
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
