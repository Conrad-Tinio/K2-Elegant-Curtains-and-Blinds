import { ExternalLink } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1, 
    name: "Project 1", 
    location: "Silang Cavite", 
    image: "/projects/project1.png", 
    tags: ["Sfold", "Wood Blinds"], 
    description: "Classic wood blinds crafted for timeless elegance and durability. Custom-stained to complement the room’s natural tones, offering both privacy and effortless light control.",
    link: "https://www.facebook.com/k2elegantcurtains",
  }, 

  {
    id: 2, 
    name: "Project 2", 
    location: "San Fernando, Pampanga", 
    image: "/projects/project2.png", 
    tags: ["French Pleated", "Roman Shades"], 
    description: "Luxury Roman shades with French pleat detailing, designed to soften modern interiors. The tailored folds create a refined look while maintaining smooth operation.",
    link: "https://www.facebook.com/k2elegantcurtains",
  }, 

  {
    id: 3, 
    name: "Project 3", 
    location: "Catbalogan, Samar", 
    image: "/projects/project3.png", 
    tags: ["Grommet", "Accordion Doors"], 
    description: "Space-saving accordion doors featuring sleek grommet tops for easy movement. Ideal for closets or room dividers, blending functionality with contemporary style.",
    link: "https://www.facebook.com/k2elegantcurtains",
  }, 
]

export default function ProjectsSection() {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container max-w-4xl mx-auto'>
        <h2 className='font-bold text-2xl md:text-4xl mb-8'> Our <span className='text-primary'> Projects </span> </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-xl mx-auto'> Here are some of our recent projects. Each project was carefully made with 
                       attention to detail, performance, and user experience. 
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full'>
              
              <div className='h-48 overflow-hidden'>
                <img src={project.image} className='w-full h-full object-cover transition-transform duration-500'/>
              </div>
              
              <div className='p-6 flex flex-col flex-grow'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, key) => (
                    <span key={key} className='rounded-full px-3 py-1 text-s font-medium bg-primary/20 text-primary'>{tag}</span>
                  ))}
                </div>

                <h3 className='text-xl text-left text-muted-foreground font-bold text-dark-titles'>{project.name}</h3>
                <h4 className='text-m text-left text-dark-titles mb-4 italic'>{project.location}</h4>
                <p className='text-s text-justify text-dark-titles mb-4'>{project.description}</p>

                <div className='flex p-2 justify-center items-center mt-auto'>
                  <div className='flex space-x-3'>
                    <a href={project.link} target='_blank' className='themed-buttons flex justify-center items-center gap-3'>
                      View Project <ExternalLink /> 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
