import JSR from "@/assets/logoJSR.png";
import IOS from "@/assets/IOS.png";

export const AlmaMater = () => {
  return (
    <div className="px-3">
      <div className="flex flex-col gap-12 font-mono text-white">
        {/* Heading */}
        <div className="text-2xl font-bold text-center">ALMA MATER</div>

        {/* College */}
        <div className="gap-4 w-full flex flex-col items-center">
          {/* PG */}
          <div className="gap-2 w-full flex flex-col sm:flex-row justify-between">
            {/* College */}
            <div className="gap-2 flex item-center">
              <img
                src={JSR}
                alt="Nit JSR"
                className="hidden sm:block size-12 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-bold text-white/80">
                  National Institue of Technology, Jamshedpur 
                </p>
                <p className="flex text-sm text-white/70"><span className="hidden sm:block">-</span> Masters Of Computer Application</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col text-sm sm:text-m  text-neutral-400 sm:text-end">
                <p>Jun 2024 - Jul 2027</p>
                <p className="font-bold italic text-neutral-300">8.58 CGPA</p>
            </div>
          </div>

          {/* UG */}
          <div className="w-full gap-2 flex flex-col sm:flex-row justify-between">
            {/* College */}
            <div className="gap-2 flex item-center">
              <img
                src={IOS}
                alt="Institue Of Science"
                className="hidden sm:block size-12 rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-bold text-white/80">
                  Institue Of Science, Nagpur
                </p>
                <p className="flex text-sm text-white/70"><span className="hidden sm:block">-</span> Bachelors Of Computer Science</p>
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col text-sm text-neutral-400 sm:text-end">
                <p>Jun 2020 - July 2023</p>
                <p className="font-bold italic text-neutral-300">75.9%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
