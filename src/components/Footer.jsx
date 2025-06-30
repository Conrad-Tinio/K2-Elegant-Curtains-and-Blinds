import { ArrowUp } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='py-3 px-4 bg-card relative flex flex-wrap justify-between items-center'>
        {" "}

        <div className='flex flex-col justify-between text-left'>
          <p className='text-primary font-semibold text-sm'> &copy; K2 Elegant Curtains and Blinds. </p>
          <p className='text-primary text-sm'>All rights reserved.</p>
        </div>

        <a href='#hero' className='p-1 rounded-full bg-primary text-background'>
            <ArrowUp />
        </a>
    </footer>
  )
}
