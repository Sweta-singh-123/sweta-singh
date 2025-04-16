import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import {ProjectShowcase} from "./pages/ProjectShowcase";
import { Contact } from "./pages/Contact";
import About from "./pages/About";
import ProjectSection from "./components/ProjectSection";
import SkillSection from "./components/SkillSection";

const MyRoutes=()=>{
    return(
        <>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/project" element={<ProjectShowcase/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/project" element={<ProjectSection/>}/>
                <Route path="/skill" element={<SkillSection/>}/>
             </Routes>
            </BrowserRouter>
        </>
    )
}
export default MyRoutes