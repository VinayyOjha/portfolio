import Separator from "@/components/common/Separator";
import Nav from "./Nav";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <div className="container pb-8 min-h-screen max-w-3xl mx-auto border border-white/15">
        <div className=" flex flex-col ">
          <Nav />
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
