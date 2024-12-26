import React from 'react'
import NotFound from "../../public/images/404.svg"
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'


function notfound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img src={NotFound} />
        <h1 className='font-extrabold text-5xl text-center py-4 text-blue'>Page Not Found</h1>
        <p className='text-primary'>Hey User! Looks like you’re heading to a wrong page</p>
       <Link to="/"> <button className='bg-blue rounded-[8px] text-white my-5 py-2 px-5 text-xl flex items-center gap-2 hover:bg-primary transform transition-all group duration-300 ease-in-out'>  <ArrowLeft size={24} />  Go Back</button></Link>
      </div>
    </>
  )
}

export default notfound
