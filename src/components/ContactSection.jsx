import { Globe, icons, MapPin, Phone, CircleUser, Smartphone } from 'lucide-react'
import React from 'react'

const contacts = [
  {
    id: 1,
    title: "Contact Person",
    icon: <CircleUser />, 
    detail: "Vanessa Joy S. Paulino",
    link: "",
  },

  {
    id: 2, 
    title: "Phone Number", 
    icon: <Smartphone />,
    detail: "+63 939 289 8357", 
    link: ""
  },

  {
    id: 3, 
    title: "Telephone Number", 
    icon: <Phone />,
    detail: "02-82425018", 
    link: ""
  }, 

  {
    id: 4, 
    title: "Facebook Page", 
    icon: <Globe />,
    detail: "K2 Elegant Curtains and Blinds",
    link: "https://www.facebook.com/k2elegantcurtains"
  }, 
]

export default function ContactSection() {
  return (
    <section id='contact' className='py-24 px-4 relative'>
      <div className='container max-w-4xl mx-auto'>
        <h2 className='font-bold text-2xl md:text-4xl mb-8 text-primary'> Contact Us </h2>
        <p className='text-xl mb-10'> Get in touch with us. You may <span className='font-bold text-primary'>contact</span> us on the following:</p>

        <div className='grid grid-cols-1 xl:grid-cols-4'>
          {contacts.map((contact, key) => (
            <div className='p-4'>
              <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
                <div className='p-3 rounded-full bg-primary/30 text-primary'>
                  {contact.icon}
                </div>
                <div className='text-center lg:text-left'>
                  <h3 className='font-bold text-primary'>{contact.title}</h3>
                  <h4 className=''>{contact.detail}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 space-y-8 flex flex-col justify-center items-center'>
          <h2 className='text-primary font-bold text-2xl md:text-4xl'>Visit Us!</h2>
          <div className='flex flex-col sm:flex-row items-center gap-3'>
            <div className='p-3 rounded-full bg-primary/30 text-primary'>
              <MapPin />  
            </div>
            <h3 className='text-l md:text-xl'>2nd Floor Guido Commercial Plaza, Angono, Rizal</h3>
          </div>
          
        </div>
      </div>
    </section>
  )
}
