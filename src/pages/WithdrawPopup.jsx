import { X } from 'lucide-react'
import React from 'react'

const WithdrawPopup = ({ handleClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white rounded-3xl shadow-lg  w-full md:w-[80%] lg:w-2/3  p-8 relative flex flex-col gap-4">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-secondary bg-homeabout p-1.5 rounded-full"
      >
        <X size={20} />
      </button>
      <div className='flex flex-col gap-4'>
        {/* Title and Subtitle */}
        <h2 className="text-2xl font-bold text-center text-primary">
          Add Passport Details
        </h2>
        <p className="text-center text-sm font-normal text-secondary">
          Welcome to AI Trade! We're thrilled to have you join our global community of empowerment and mutual support. If you were invited, your inviter’s ID should appear below. If not, don’t worry — click below to get started, and we’ll connect you with an amazing community leader. Let’s all thrive together!
        </p>
      </div>

      {/* Form Fields */}
   
    </div>
  </div>
  )
}

export default WithdrawPopup