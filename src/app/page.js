
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import CustomCursor from './components/CustomCursor'
import EmailSection from './components/EmailSection'
import Experience from './components/Experience'

import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import Service from './components/Service'
import Skills from './components/Skills'


export default function Home() {
  return (
    <>
    <CustomCursor/>
      <main className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <div className="bg-[#F5DAD2]">
          <HeroSection />
        </div>
        <div className="container mt-20 md:-mt-16 mx-auto px-12">   
          <Skills/>
          <AboutSection/>
          <Experience/>
          <Service/> 
          <ProjectsSection/>
          <EmailSection/>
        </div>
        <Footer/>
      </main>
    </>
  )
}
