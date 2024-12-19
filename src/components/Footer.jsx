import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-header'>
        <div className='flex flex-col justify-center items-center gap-9 p-4 mx-auto ' >
            <div className="flex items-center justify-between w-full ">
                <img src="/images/XRade-logo.webp" alt="" className='w-[38px]' />
                <div>
                    <p className='text-secondary text-lg font-bold'>Corporate office address-AI trade corporation My street 1215 Houston Texas 77057  USA</p>
                </div>
               <div className='flex flex-col items-center justify-center'>
                <p>Social Media Links </p>
                <div>
                <Facebook />
                <Linkedin />
                <Twitter />
                </div>
               </div>
            </div>
            <div>
                <p>@XTrade 2024. All right reserved</p>
            </div>
        </div>
        </div>
    )
}

export default Footer