import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Blogs from "@/pages/Blogs";
// import Projects from "@/pages/Projects";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        {/* <Route path="/projects" element={<Projects/>}/> */}
    </Routes>
  )
}

export default AppRoutes