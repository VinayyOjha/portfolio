import { cn } from "@/lib/utils";

const Tags = ({
  label,
  className,
  imgSrc,
  imgClassName,
}: {
  label: string;
  className?: string;
  imgSrc?: string;
  imgClassName?: string;
}) => {
  return (
    <div className={cn("px-1 text-xs border border-white/30 text-[11px] text-black bg-white", className)}>
      {imgSrc == "na" ? "" :  <img
        src={imgSrc}
        alt=""
        className={cn("size-5 rounded-full", imgClassName)}
      />}
      {label}
    </div>
  );
};

export default Tags;
