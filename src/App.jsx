import Header from "./Components/Header"
import About from "./Pages/About"
import Accueil from "./Pages/Accueil"
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer"
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills"
function App() {

  return (
    <div className="min-h-screen bgCMC">
    <Header/>
    <br/>
      <main>
        <Accueil/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  )
}

export default App
