import React from 'react'
import photo from './assets/photo.jpg'
// const logo = require('./logo.jpeg);

export default function Resume() {
  return (
    <div>
      {/* justify-center */}
      
       <div className="flex items-center justify-center">
       <div className="bg-blue-900 w-1/8 h-auto p-10 ">
        <div className='flex item-center justify-center mb-10'>
        <img className='rounded-full w-36 border-2' src={photo}/>
        </div>
       
    
        <h1 className='text-gray-400 uppercase tracking-widest text-lg
        font-bold'>Contact</h1>
        <hr className="mb-6 w-1/6" ></hr>
        <h1 className='text-gray-400 text-sm'>Palanik922@gmail.com</h1>
        <h1 className='text-gray-400 text-sm'>7676837451</h1>
        <h1 className='text-gray-400 text-sm'>#2/1 2nd 'A' Main  Srinivasa <br/> Nagar  Near Ganesha <br/>Temple Bangalore 560050</h1>
        <hr className='my-5'/>
        <h1 className='text-gray-400 uppercase tracking-widest text-lg
        font-bold'>Education</h1>
        <hr className='mb-5 w-1/6'/>
        <h1 className='text-gray-400 text-sm font-semibold tracking-wider'>Master of Science</h1>
        <h1 className='text-gray-500 text-sm'> <span className="italic">Visvesvaraya Technological University</span>
         ,<span className="text-gray-400 font-semibold italic">Bangalore</span>
         / 2016 - 2018 </h1>
        
        <h1 className='text-gray-400 text-sm font-semibold tracking-wider'>Master of Science</h1>
        <h1 className='text-gray-500 text-sm'> <span className="italic">Visvesvaraya Technological University</span>
         ,<span className="text-gray-400 font-semibold italic">Bangalore</span>
         / 2016 - 2018 </h1>
        </div>
        

        
   
        
       </div>
    </div>
  )
}
