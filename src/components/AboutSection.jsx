import { Briefcase, Hand, Mail, MessageCircleQuestionMark, Phone, Verified } from 'lucide-react'
import React from 'react'

export default function AboutSection() {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container max-w-4xl mx-auto'>

        <h2 className='font-bold text-2xl md:text-4xl mb-12'>About <span className='text-primary'> Us </span></h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'> 
          <div className='space-y-6'>
            <h3 className='text-primary text-xl md:text-2xl font-semibold'> Custom Curtains & Blinds Specialists </h3>
            <p className='text-muted-foreground px-10'>
              With over 5 years of experience in the window treatments industry, we specialize in 
              creating beautiful, functional, and high-quality curtains and blinds tailored to your space.
            </p>
            <p className='text-muted-foreground'>
              We’re passionate about transforming rooms with elegant designs, precise measurements, and 
              premium materials—ensuring your home or office reflects your style while enjoying perfect 
              light control and privacy.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 pt-2 justify-center items-center'>
              <a href='https://www.facebook.com/k2elegantcurtains' target='_blank' className='themed-buttons flex flex-row gap-3'>
                <Mail /> Get In Touch
              </a>
              <a href='#contact' className='themed-buttons flex flex-row gap-3'>
                <Phone /> Call Us
              </a>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
              <div className='gradient-border p-4 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/30'>
                    <Hand className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg text-primary'> Custom Curtains </h4>
                    <p className='text-left text-m text-black'>
                      Handcrafted drapes and curtains in a wide range of fabrics, colors, and styles to match your décor.
                    </p>
                  </div>
                </div>
              </div>

              <div className='gradient-border p-4 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/30'>
                    <Verified className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg text-primary'> Premium Blinds </h4>
                    <p className='text-left text-m text-black'>
                      Expertly fitted blinds, including roller, Venetian, vertical, and blackout options for every need.
                    </p>
                  </div>
                </div>
              </div>

              <div className='gradient-border p-4 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/30'>
                    <MessageCircleQuestionMark className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg text-primary'> Consultation & Installation </h4>
                    <p className='text-left text-m text-black'>
                      Personalized advice and professional installation to ensure flawless results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
