import React from 'react'
import NotFound from "../../public/images/404.svg"
import { ArrowLeft } from 'lucide-react'


function notfound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img src={NotFound} />
        <h1 className='font-extrabold text-5xl text-center py-4'>Page Not Found</h1>
        <p className='text-sm'>Hey User! Looks like you’re heading to a wrong page</p>
        <button className='bg-[#383838] rounded-[8px] text-white my-5 py-2 px-5 text-xl flex items-center gap-2'>  <ArrowLeft size={24} />  Go Back</button>
      </div>
    </>
  )
}

export default notfound
