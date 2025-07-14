import { cn } from "@/lib/utils";

export const Card = ({
  image,
  imageDescription,
  projectName,
  projectDescription,
  tags,
  website,
  github,
  cardClassName,
  imageClassName,
}: {
  image: string;
  imageDescription?: string;
  projectName: string;
  projectDescription: string;
  tags?: string[];
  website?: string;
  github?: string;
  cardClassName?: string;
  imageClassName?: string;
}) => {
  return (
    // Outer card Container
    <div
      className={cn(
        `group grid-cols-1 rounded-sm flex flex-col font-mono transition-all duration-300 ease-in cursor-pointer border border-white/10 hover:shadow shadow-gray-500`,
        cardClassName
      )}
    >
      <div className="flex flex-col gap-2">
        {/* Image */}
        <div className="relative h-60 overflow-hidden group">

          <img
            src={image}
            alt={imageDescription}
            className={cn(`h-full w-full object-cover rounded-t-sm transition-all duration-300 ease-in group-hover:scale-102 `, imageClassName)}
          />
          {/* Gradient overlay for bottom fade-out */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent curosr-pointer" />
        </div>

        {/* Name and Description */}
        <div className="px-2 flex flex-col gap-2">
          {/* Project Name */}
          <div className="text-2xl transition-all duration-300 ease-in text-white group-hover:text-blue-400">
            {projectName}
          </div>

          {/* Project-description */}
          <div className="text-sm text-white/70">{projectDescription}</div>
        </div>
      </div>
    </div>
  );
};
