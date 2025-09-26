import pfp from "../assets/PFP.png";

export const IntroForMobile = () => {
  return (
    <div className="sm:hidden p-2 w-full flex justify-between rounded-md border border-white/40">
        <div className="">
            <img 
                src={pfp} 
                className="size-12 object-cover rounded-md"
            />
        </div>

        <div className="font-ms tracking-tight">
            <div className="text-2xl text-white">Vinay Ojha</div>
            <div className="text-end text-[9px] text-white/60">eng, dev</div>
        </div>
    </div>
  );
};
