import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div className='min-h-screen'>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer /> 
    </div>
  )
}
