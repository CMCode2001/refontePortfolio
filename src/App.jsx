import About from "./Pages/About"
import Accueil from "./Pages/Accueil"
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
import BlogDesign from "./Pages/BlogDesign"

import { cn } from "@/Components/lib/utils";
import { DotPattern } from "@/Components/components/ui/dot-pattern";


function App() {

  return (
    <div className=" size-full items-center justify-center overflow-hidden  md:shadow-xl">

        <div className="min-h-screen bgCMC">  
        {/* <Header/> */}
        <main>
        <DotPattern
              width={20}
              height={20}
              cx={1}
              cy={1}
              cr={1}
              className={cn(
                "[mask-image:linear-gradient(to_bottom_right,gray,transparent,transparent)] ",
              )}
            />
            <Accueil/>
            <About/>
            <Skills/>
            <Projects/>
            <BlogDesign/>
            <Contact/>
            <Footer/>
          </main>

        </div>
    </div>

  )
}

export default App
