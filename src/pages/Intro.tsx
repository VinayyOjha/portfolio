import PFP from "@/assets/PFP.png";
const Intro = () => {
  return (
    <div className="px-2 md:px-4 flex flex-col gap-2 font-mono">
      {/* 1st: Name and Photo */}
      <div className="flex justify-between items-center ">
        {/* Name */}
        <div className="flex flex-col">
          <p className="flex gap-2 text-white/70 text-2xl">I'm <p className="text-2xl text-white">Vinay Ojha</p></p>
          <p className="pl-1.5 text-[12px] text-white/70">engineer, dev</p>
        </div>

        {/* Image */}
        <div className="">
          <img
            src={PFP}
            alt="Display Profile Picture"
            className="h-20 w-20 rounded-full"
          />
        </div>
      </div>

      {/* 2nd: Brief Info */}
      <div className="flex flex-col tracking-tight text-white/70 ">
        <div className="gap-2 flex items-center">
          <div className="text-white rounded-full">.</div>
          <p>post-grad at <span className="bold italic">National Institute Of Technology, Jamshedpur.</span></p>
        </div>
        <div className="gap-2 flex items-center">
          <div className="text-white rounded-full">.</div>
          <p>post-grad at National Institute Of Technology, Jamshedpur.</p>
        </div>
        <div className="gap-2 flex items-center">
          <div className="text-white rounded-full">.</div>
          <p>post-grad at National Institute Of Technology, Jamshedpur.</p>
        </div>
        <div className="gap-2 flex items-center">
          <div className="text-white rounded-full">.</div>
          <p>i wanna grow old raising cows that's it.</p>
        </div>
      </div>

      {/* 3rd: Availability and Contact Info */}
      <div className="mt-4 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-start">
        {/* availability */}
        <div className="px-2 h-fit rounded-full border border-green-500 bg-green-500/20">
          <p className="text-[10px] text-green-500 ">Open for freelance projects</p>
        </div>
        {/* contact, resume and book a call */}
        <div className="flex gap-2 text-xs text-white/70">
          <div className="px-2 rounded-xs border border-white/50 bg-neutral-600">Contact</div>
          <div className="px-2 rounded-xs border border-white/50 bg-neutral-600">Resume</div>
          <div className="px-2 rounded-xs border border-white/50 bg-neutral-600">Book a call</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
