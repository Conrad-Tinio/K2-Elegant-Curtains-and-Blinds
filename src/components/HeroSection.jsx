import { ArrowDown } from 'lucide-react'
import React from 'react'

export default function HeroSection() {
  return (
    <section id="hero" className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        <img src='/public/logo.svg' className='h-40 w-40 items-center justify-center flex mt-5'/>
        <div className='container max-w-4xl mx-auto text-center z-10'>
            <div className='space-y-8'>
                <h1 className='font-semibold text-4xl md:text-6xl tracking-tight'>
                    <span className='opacity-0 animate-fade-in-delay-1'> Welcome to </span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-2'> K2 Elegant Curtains and Blinds </span>
                </h1>

                <p className='text-lg md:text-2xl max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    We offer beautifully crafted curtains and blinds designed to enhance your home’s style, 
                    comfort, and functionality with premium quality and timeless elegance.
                </p>

                <div className='opacity-0 animate-fade-in-delay-4'>
                    <a href='#projects' className='themed-buttons text-md md:text-xl'>
                        See Our Projects
                    </a>
                </div>

                <a href='#about' className='flex flex-col items-center justify-center animate-bounce cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2'>
                    <h1 className='text-xl font-bold'> Scroll </h1>
                    <ArrowDown />
                </a>
            </div>
        </div>
    </section>
  )
}
