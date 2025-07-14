export const Acheivements = () => {
  return (
    <div className="px-2 md:px-4">
      <div className="flex flex-col gap-8 font-mono text-white">
        {/* Heading */}
        <div className="text-2xl font-bold text-center">Acheivements</div>

        {/* Acheivements */}
        <div className="flex flex-col gap-4 tracking-tight text-white/70 ">
          <div className="gap-2 flex items-center">
            <div className="text-white rounded-full">.</div>
            <p>secured <span className="font-bold text-white/90">AIR 402</span> in NIMCET 2024.</p>
          </div>
          <div className="gap-2 flex ">
            <div className="text-white rounded-full text-start">.</div>
            <p>
              Awarded the INSPIRE Scholarship by the <span className="italic font-bold text-white/90">Government of India</span> for ranking in the top 1% in Class 12. Received a scholarship<span className="italic font-bold text-white/80"> amount of ₹1,80,000.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
