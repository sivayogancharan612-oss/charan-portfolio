import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden min-h-screen">
      <Navbar />
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App
