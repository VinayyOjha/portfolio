import PFP from "@/assets/PFP.png";
import { ContactDialog } from "@/components/common/ContactDialog";
import { CallBellIcon, Download } from "@phosphor-icons/react";
const Intro = () => {
  return (
    <div className="px-2 md:px-4 flex flex-col gap-2 font-mono">
      {/* 1st: Name and Photo */}
      <div className="flex justify-between items-center ">
        {/* Name */}
        <div className="flex flex-col">
          <div className="flex gap-3 text-white/85 text-2xl">
            <div className="flex items-end">I'm</div>{" "}
            <div className="font-bold text-3xl text-white">Vinay Ojha.</div>
          </div>
          <p className="text-[12px] text-white/70">eng, dev</p>
        </div>

        {/* Image */}
        <div className="hidden sm:block">
          <img
            src={PFP}
            alt="Display Profile Picture"
            className="h-20 w-20 rounded-full"
          />
        </div>
      </div>

      {/* 2nd: Brief Info */}
      <div className="flex flex-col gap-2 tracking-tight text-white/85 ">
        <div className="gap-2 flex items-start ">
          <div className="flex text-start rounded-full text-white">-</div>
          <p className="">
            post-grad at{" "}
            <span className="bold italic">
              National Institute Of Technology, Jamshedpur.
            </span>
          </p>
        </div>
        <div className="gap-2 flex items-start">
          <div className="rounded-full text-white">-</div>
          <p>I turn ideas into code.</p>
        </div>
        <div className="gap-2 flex items-start">
          <div className="rounded-full text-white">-</div>
          <p>Math, CS, History and Spirituality are areas which intrigue me.</p>
        </div>
        <div className="gap-2 flex items-start">
          <div className="rounded-full text-white">-</div>
          <p>i wanna grow old raising cows that's it.</p>
        </div>
      </div>

      {/* 3rd: Availability and Contact Info */}
      <div className="mt-4 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-start">
        {/* availability */}
        <div className="px-2 h-fit flex gap-1.5 items-center rounded-full border border-green-500 bg-green-500/20">
          <div className="relative">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <div className="h-2 w-2 absolute inset-0 animate-ping rounded-full bg-green-500"></div>
          </div>

          <p className="text-[10px] text-green-500 ">
            Open for freelance projects
          </p>
        </div>
        {/* contact, resume and book a call */}
        <div className="flex gap-2 flex-wrap  ">
          <ContactDialog />
          {/* CV */}
          <a
            // href={myResume}
            download={"Resume_VivekOjha.pdf"}
            className="w-fit px-2 py-0  gap-1 flex items-center font-sans-serif text-xs cursor-pointer rounded transition-all duration-300 border border-neutral-400 bg-neutral-200"
          >
            <Download size={14} />
            Resume
          </a>
          {/* Book a Call */}
          <div className="w-fit px-2 py-1 gap-1 flex items-center font-sans-serif text-xs cursor-pointer rounded border  transition-all duration-300  border-neutral-400 bg-neutral-200">
            <CallBellIcon size={14} />
            Book A Call
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
